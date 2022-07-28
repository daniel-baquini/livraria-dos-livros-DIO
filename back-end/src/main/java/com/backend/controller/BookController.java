package com.backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.User;
import com.backend.repository.UserRepository;

@RestController
@RequestMapping("/book")
public class BookController {
    
    @Autowired
    UserRepository repo;

    @GetMapping("/")
    @ResponseStatus(HttpStatus.OK)
    public String def() {
        return "Hello autenticado";
    }

}
