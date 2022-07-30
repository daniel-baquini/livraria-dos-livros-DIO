package com.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.backend.entity.Book;
import com.backend.repository.BookRepository;

@Service
public class BookService {
    
    @Autowired
    private BookRepository bookRepository;

    private final int quantityPerPage = 6;

    public List<Book> filter(String condition) {
        return this.bookRepository.filter(condition);
    }

    public Optional<Book> findById(Integer id) {
        return this.bookRepository.findById(id);
    }

    public List<Book> getAllBooksInStock(int page) {
        return this.bookRepository.getAllBooksInStock(
            PageRequest.of(page, this.quantityPerPage)
        );
    }

}
