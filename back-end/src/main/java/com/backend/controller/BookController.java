package com.backend.controller;

import com.backend.entity.Book;
import com.backend.service.BookService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/book")
public class BookController {
    
    @Autowired
    private BookService bookService;

    @GetMapping("/filter/{condition}")
    @ResponseStatus(HttpStatus.OK)
    public List<Book> filter(@PathVariable(value = "condition") String condition) {
        return this.bookService.filter(condition);
    }

    @GetMapping("/get/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Book> get(@PathVariable(value = "id") Integer id) {
        return this.bookService.findById(id);
    }

    @GetMapping("/getAll/{page}")
    @ResponseStatus(HttpStatus.OK)
    public List<Book> getAll(@PathVariable(value = "page") int page) {
        return  this.bookService.getAllBooksInStock(page);
    }

}
