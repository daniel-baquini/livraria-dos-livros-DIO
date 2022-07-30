import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartManagementService } from '../cart-management.service';

@Component({
    selector: 'app-payment-method-page',
    templateUrl: './payment-method-page.component.html',
    styleUrls: ['./payment-method-page.component.css']
})
export class PaymentMethodPageComponent {
    
    paymentMethod: string = "";
    showEndOfDemoModal: boolean = false;
    
    constructor(
        private cartManagementService: CartManagementService,
        private router: Router
    ) { }

    goToHomePage() {
        this.cartManagementService.clear();
        this.router.navigateByUrl("/")
    }

}
