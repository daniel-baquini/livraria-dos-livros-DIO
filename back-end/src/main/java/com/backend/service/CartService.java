package com.backend.service;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.entity.Book;
import com.backend.model.CartItem;
import com.backend.model.exception.DomainException;
import com.backend.repository.BookRepository;

@Service
public class CartService {
    
    @Autowired
    private BookRepository bookRepository;

    @Transactional
    public void buyBooks(List<CartItem> cartItems) {
        for (CartItem cartItem : cartItems) {
            Optional<Book> optionalBook = this.bookRepository.findById(cartItem.getBook().getId());
            if(!optionalBook.isPresent()) {
                throw new DomainException("O livro de título \"" + cartItem.getBook().getTitle() + "\" não foi encontrado.");
            }

            Book book = optionalBook.get();
            if(cartItem.getQuantity() > book.getQuantity()) {
                throw new DomainException(String.format(
                    "O livro de título \"%s\" possui apenas %d unidades em estoque (a tentativa de compra foi de %d unidades)",
                    book.getTitle(),
                    book.getQuantity(),
                    cartItem.getBook().getQuantity()
                ));
            }

            book.setQuantity(book.getQuantity() - cartItem.getQuantity());
            this.bookRepository.save(book);
        }
    }

}
