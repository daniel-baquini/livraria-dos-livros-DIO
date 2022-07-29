package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.backend.entity.User;
import com.backend.model.ForgotPassword;
import com.backend.model.exception.DomainException;
import com.backend.model.http.ApiReturn;
import com.backend.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody User user) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            this.userService.createAccount(user);
        }
        catch(DomainException e) {
            return ResponseEntity.badRequest().body(
                objectMapper.writeValueAsString(
                    new ApiReturn<String>(e.getMessage())
                )                
            );
        }

        return ResponseEntity.ok().body(
            objectMapper.writeValueAsString(
                new ApiReturn<String>("Cadastro realizado com sucesso.")
            )
        );
    }

    @PutMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPassword forgotPassword) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            User user = this.userService.findByUsername(forgotPassword.getUsername());
            user.setPassword(
                new BCryptPasswordEncoder().encode(forgotPassword.getPassword())
            );
            this.userService.save(user);
        }
        catch(DomainException e) {
            return ResponseEntity.badRequest().body(
                objectMapper.writeValueAsString(
                    new ApiReturn<String>(e.getMessage())
                )                
            );
        }

        return ResponseEntity.ok().body(
            objectMapper.writeValueAsString(
                new ApiReturn<String>("Senha alterada com sucesso")
            )
        );
    }

}
