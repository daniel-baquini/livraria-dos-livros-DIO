package com.backend.security;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.backend.config.JWTConfiguration;
import com.backend.config.SecurityConfiguration;
import com.backend.model.JWTObject;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

// All requests will be intercepted by this filter, in the "doFilterInternal",
// we will check for a valid JWT.
public class JWTFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(
        HttpServletRequest request, HttpServletResponse response, FilterChain filterChain
    ) throws ServletException, IOException {
        String token = request.getHeader(JWTCreator.HEADER_AUTHORIZATION);
        try {
            if(token != null && !token.isEmpty()) {
                JWTObject tokenObject = JWTCreator.create(token, JWTConfiguration.PREFIX, JWTConfiguration.KEY);
                List<SimpleGrantedAuthority> authorities = authorities(tokenObject.getRoles());

                var userToken = new UsernamePasswordAuthenticationToken(
                    tokenObject.getSubject(),
                    null,
                    authorities
                );

                SecurityContextHolder.getContext().setAuthentication(userToken);
            }
            else {
                SecurityContextHolder.clearContext();
            }
            filterChain.doFilter(request, response);
        }
        catch(ExpiredJwtException | UnsupportedJwtException | MalformedJwtException | SignatureException e) {
            // TODO: see if it's possible to return a body, containing the description of the error.
            e.printStackTrace();
            response.setStatus(HttpStatus.FORBIDDEN.value());
            return;
        }
    }

    private List<SimpleGrantedAuthority> authorities(List<String> roles) {
        return roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }


}


