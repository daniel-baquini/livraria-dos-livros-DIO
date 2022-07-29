package com.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_book")
public class Book {
    
    private String author;
    private String bookCoverUrl;

    @Column(columnDefinition = "LONGTEXT")
    private String description;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Double price;
    private Integer quantity;
    private Double rating;
    private Integer reviewsQuantity;
    private String title;

    public Book() { }

    public Book(String author, String bookCoverUrl, String description, Double price, Integer quantity, Double rating, Integer reviewsQuantity, String title) {
        this.author = author;
        this.bookCoverUrl = bookCoverUrl;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.rating = rating;
        this.reviewsQuantity = reviewsQuantity;
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getBookCoverUrl() {
        return bookCoverUrl;
    }

    public void setBookCoverUrl(String bookCoverUrl) {
        this.bookCoverUrl = bookCoverUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Integer getReviewsQuantity() {
        return reviewsQuantity;
    }

    public void setReviewsQuantity(Integer reviewsQuantity) {
        this.reviewsQuantity = reviewsQuantity;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}
