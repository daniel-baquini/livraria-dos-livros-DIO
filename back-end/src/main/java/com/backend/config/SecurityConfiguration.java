package com.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests()
            .antMatchers("/").permitAll()
            .antMatchers(HttpMethod.POST, "/login").permitAll()
            // .and().formLogin() redirects user to login page
            //
            // the code bellow makes all non authenticated requests redirect to login page
            // anyRequest().authenticated().and().formLogin(); 
            .antMatchers("/book").authenticated();

        return http.build();
    }

}
