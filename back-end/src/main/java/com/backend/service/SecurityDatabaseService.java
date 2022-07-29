package com.backend.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.backend.entity.User;
import com.backend.repository.UserRepository;

@Service
public class SecurityDatabaseService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User userEntity = this.userRepository.findByUsername(username);
        if(userEntity == null) {
            throw new UsernameNotFoundException(username);
        }

        Set<GrantedAuthority> authorities = new HashSet<>();
        userEntity.getRoles().forEach(role -> {
            // The security framework doesn't accep roles in a string format, it's
            // required to use a object that implements "GrantedAuthority" interface.
            //
            // The "ROLE_" concatenation is a framework expectative, it requires to 
            // use that standar.
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        });

        // It's requires to specify all the package path because name conflict (we also have an "User"
        // class in the "java.com.backend.entity" package)
        return new org.springframework.security.core.userdetails.User(
            userEntity.getUsername(),
            userEntity.getPassword(),
            authorities
        );
    }
    
}
