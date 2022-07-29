import { Injectable } from '@angular/core';
import Book from '../shared/backend/book/book.model';
import CartItem from './cart-item/cart-item.model';

@Injectable({
    providedIn: 'root'
})
export class CartManagementService {
    
    public cart: CartItem[] = [];
    
    addItem(book: Book): void {
        if(this.isOnCart(book.id)) return;
        this.cart.push(new CartItem(book, 1));
    }

    decrementItem(bookId: number): void {
        const cartItemToDecrement: CartItem | undefined = this.cart.find(x => x.book.id === bookId);
        if(!cartItemToDecrement) return

        cartItemToDecrement.quantity--;
        if(cartItemToDecrement.quantity <= 0) this.deleteItem(bookId);
    }

    deleteItem(bookId: number): void {
        const cartItemIndex: number = this.cart.findIndex(x => x.book.id === bookId);
        if(cartItemIndex === -1) return

        this.cart.splice(cartItemIndex, 1);
    }

    incrementItem(bookId: number): void {
        const cartItemToIncrement: CartItem | undefined = this.cart.find(x => x.book.id === bookId);
        if(!cartItemToIncrement) return

        cartItemToIncrement.quantity++;
    }

    isOnCart(bookId: number): boolean {
        return !!this.cart.find(x => x.book.id === bookId);
    }
}
