import { Injectable } from '@angular/core';
import Book from '../shared/backend/book/book.model';
import CartItem from './cart-item/cart-item.model';

@Injectable({
    providedIn: 'root'
})
export class CartManagementService {
    
    public cart: CartItem[] = [];
    
    constructor() {
        const cartString = localStorage.getItem("cart");
        if(cartString === null) return

        const itemsWithoutMethods: CartItem[] = JSON.parse(cartString);
        itemsWithoutMethods.forEach(x => {
            this.cart.push(new CartItem(x.book, x.quantity));
        });
    }

    addItem(book: Book): void {
        if(this.isOnCart(book.id)) return;
        this.cart.push(new CartItem(book, 1));
        this.updateLocalStorage();
    }

    decrementItem(bookId: number): void {
        const cartItemToDecrement: CartItem | undefined = this.cart.find(x => x.book.id === bookId);
        if(!cartItemToDecrement) return

        cartItemToDecrement.quantity--;

        if(cartItemToDecrement.quantity <= 0) {
            this.deleteItem(bookId);
        }
        else {
            this.updateLocalStorage();
        }
    }

    deleteItem(bookId: number): void {
        const cartItemIndex: number = this.cart.findIndex(x => x.book.id === bookId);
        if(cartItemIndex === -1) return

        this.cart.splice(cartItemIndex, 1);
        this.updateLocalStorage();
    }

    incrementItem(bookId: number): void {
        const cartItemToIncrement: CartItem | undefined = this.cart.find(x => x.book.id === bookId);
        if(!cartItemToIncrement) return

        cartItemToIncrement.quantity++;
        this.updateLocalStorage();
    }

    isOnCart(bookId: number): boolean {
        return !!this.cart.find(x => x.book.id === bookId);
    }

    private updateLocalStorage(): void {
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }
}
