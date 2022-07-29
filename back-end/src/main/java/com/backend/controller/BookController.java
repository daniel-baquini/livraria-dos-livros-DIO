package com.backend.controller;

import com.backend.entity.Book;
import com.backend.repository.BookRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/book")
public class BookController {
    
    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/getAll")
    @ResponseStatus(HttpStatus.OK)
    public List<Book> getAll() {
        return this.bookRepository.findAll();
    }

    @GetMapping("/app/**")
    @ResponseStatus(HttpStatus.OK)
    public String hey() {
        return "ha";
    }

}
