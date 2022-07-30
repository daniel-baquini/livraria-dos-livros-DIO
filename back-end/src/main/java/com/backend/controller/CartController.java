package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.CartItem;
import com.backend.model.exception.DomainException;
import com.backend.model.http.ApiReturn;
import com.backend.service.CartService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    
    @Autowired
    private CartService cartService;

    private ObjectMapper objectMapper = new ObjectMapper();
    
    @PostMapping("/buy")
    public ResponseEntity<?> buy(@RequestBody List<CartItem> cartItems) throws JsonProcessingException {        
        try {
            this.cartService.buyBooks(cartItems);
            return ResponseEntity.ok().build();
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
