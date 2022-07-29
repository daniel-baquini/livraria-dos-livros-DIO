import CartItem from './cart-item.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
    
    @Input() cartItem: CartItem | undefined;
 
    get priceInCentavos(): string {
        if(!this.cartItem) return "";

        return `${Math.floor((this.cartItem.book.price - Math.floor(this.cartItem.book.price))*100)}`.padEnd(2, "0");
    }

    get priceInReal(): number {
        if(!this.cartItem) return 0;

        return Math.floor(this.cartItem.book.price);
    }

}
