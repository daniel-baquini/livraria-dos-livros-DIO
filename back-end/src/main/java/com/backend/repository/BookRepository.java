package com.backend.repository;

import com.backend.entity.Book;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BookRepository extends JpaRepository<Book, Integer> {

    @Query("SELECT b FROM Book b WHERE UPPER(b.author) LIKE CONCAT('%', UPPER(:condition),'%') OR UPPER(b.title) LIKE CONCAT('%', UPPER(:condition),'%')")
    public List<Book> filter(@Param ("condition") String condition);

    @Query("SELECT b FROM Book b WHERE b.quantity > 0")
    public List<Book> getAllBooksInStock(Pageable pageable);
}