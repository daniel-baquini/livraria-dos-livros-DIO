package com.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.backend.security.JWTFilter;
import com.backend.service.SecurityDatabaseService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration {
    
    @Autowired
    private SecurityDatabaseService securityService;

    @Bean
    public BCryptPasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.headers().frameOptions().disable();
        // Authentication for creation, delete and update will be made with a JWT token,
        // so cors and csrf is not required.
        http.cors().and().csrf().disable()
            .addFilterAfter(new JWTFilter(), UsernamePasswordAuthenticationFilter.class)
            .authorizeRequests()
        //http.authorizeHttpRequests()
            .antMatchers("/").permitAll()
            .antMatchers("/app", "/app/**").permitAll()
            .antMatchers("/api/book", "/api/book/**").permitAll()
            .antMatchers("/api/user", "/api/user/**").permitAll()
            .antMatchers("/images", "/images/**").permitAll()
            .antMatchers("/h2-console", "/h2-console/**").permitAll()
            .anyRequest().authenticated().and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http.build();
    }

    @Autowired
    public void globalUserDetails(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(securityService).passwordEncoder(new BCryptPasswordEncoder());
    }

    // @Bean
    // public WebSecurityCustomizer webSecurityCustomizer() {
    //     return (web) -> web.ignoring().antMatchers("/h2", "/h2/**");
    // }

}
