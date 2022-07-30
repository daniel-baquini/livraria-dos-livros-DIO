import { Component } from '@angular/core';
import { CartManagementService } from 'src/app/cart/cart-management.service';
import { UserService } from '../../backend/user/user.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {
    
    constructor(
        private cartManagementService: CartManagementService,
        public userService: UserService
    ) { }
    
    get cartItemQuantity(): number {
        return this.cartManagementService.cart.length;
    }

}
