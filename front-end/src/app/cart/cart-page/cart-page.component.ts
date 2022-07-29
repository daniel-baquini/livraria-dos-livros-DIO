import { CartManagementService } from '../cart-management.service';
import { Component } from '@angular/core';
import CartItem from '../cart-item/cart-item.model';

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
    
    constructor(private cartManagementService: CartManagementService) { }
    
    get cart(): CartItem[] {
        return this.cartManagementService.cart;
    }

}
