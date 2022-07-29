import CartItem from './cart-item.model';
import { Component, Input } from '@angular/core';
import { CartManagementService } from '../cart-management.service';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
    
    @Input() cartItem: CartItem | undefined;
 
    constructor(private cartManagementService: CartManagementService) { }

    get priceInCentavos(): string {
        if(!this.cartItem) return "";

        return `${Math.floor((this.cartItem.totalPrice - Math.floor(this.cartItem.totalPrice))*100)}`.padEnd(2, "0");
    }

    get priceInReal(): number {
        if(!this.cartItem) return 0;

        return Math.floor(this.cartItem.totalPrice);
    }

    decrementItem(): void {
        this.cartManagementService.decrementItem(this.cartItem!.book.id)
    }

    deleteItem(): void {
        this.cartManagementService.deleteItem(this.cartItem!.book.id)
    }

    incrementItem(): void {
        this.cartManagementService.incrementItem(this.cartItem!.book.id)
    }
    
}
