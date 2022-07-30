package com.backend.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.config.JWTConfiguration;
import com.backend.entity.User;
import com.backend.model.ForgotPassword;
import com.backend.model.JWTObject;
import com.backend.model.Login;
import com.backend.model.exception.DomainException;
import com.backend.model.http.ApiReturn;
import com.backend.model.http.LoginReturn;
import com.backend.security.JWTCreator;
import com.backend.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @Autowired
    // BCrypt, check "SecurityConfiguration" file.
    private PasswordEncoder encoder;


    private ObjectMapper objectMapper = new ObjectMapper();

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody User user) throws JsonProcessingException {
        try {
            this.userService.createAccount(user);
        }
        catch(DomainException e) {
            return ResponseEntity.badRequest().body(
                this.objectMapper.writeValueAsString(
                    new ApiReturn<String>(e.getMessage())
                )                
            );
        }

        return ResponseEntity.ok().body(
            this.objectMapper.writeValueAsString(
                new ApiReturn<String>("Cadastro realizado com sucesso.")
            )
        );
    }

    @PutMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPassword forgotPassword) throws JsonProcessingException {
        try {
            User user = this.userService.findByUsername(forgotPassword.getUsername());
            user.setPassword(
                new BCryptPasswordEncoder().encode(forgotPassword.getPassword())
            );
            this.userService.save(user);
        }
        catch(DomainException e) {
            return ResponseEntity.badRequest().body(
                this.objectMapper.writeValueAsString(
                    new ApiReturn<String>(e.getMessage())
                )                
            );
        }

        return ResponseEntity.ok().body(
            this.objectMapper.writeValueAsString(
                new ApiReturn<String>("Senha alterada com sucesso")
            )
        );
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Login login) throws JsonProcessingException {
        try {
            User user = this.userService.findByUsername(login.getUsername());
            if(user == null) {
                throw new DomainException("Email ou senha inválidos.");
            }
    
            boolean isPasswordOk = this.encoder.matches(login.getPassword(), user.getPassword());
            if(!isPasswordOk) {
                throw new DomainException("Email ou senha inválidos.");
            }

            JWTObject jwtObject = new JWTObject();
            jwtObject.setSubject(user.getUsername());
            jwtObject.setIssuedAt(new Date(System.currentTimeMillis()));
            jwtObject.setExpiration(new Date(System.currentTimeMillis() + JWTConfiguration.EXPIRATION));
            jwtObject.setRoles(user.getRoles());

            return ResponseEntity.ok().body(
                this.objectMapper.writeValueAsString(
                    new ApiReturn<LoginReturn>(
                        new LoginReturn(
                            JWTCreator.create(JWTConfiguration.PREFIX, JWTConfiguration.KEY, jwtObject)
                        )
                    )
                )
            );

        }
        catch(DomainException e) {
            return ResponseEntity.badRequest().body(
                this.objectMapper.writeValueAsString(
                    new ApiReturn<String>(e.getMessage())
                )                
            );
        }
    }

}
