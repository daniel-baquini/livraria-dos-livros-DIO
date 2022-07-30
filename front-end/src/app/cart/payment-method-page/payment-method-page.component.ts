import { CartService } from 'src/app/shared/backend/cart/cart.service';
import { CartManagementService } from '../cart-management.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import ApiReturn from 'src/app/shared/backend/server-response/api-return.model';
import JavaErrorResponse from 'src/app/shared/backend/server-response/java-error-response.model';

@Component({
    selector: 'app-payment-method-page',
    templateUrl: './payment-method-page.component.html',
    styleUrls: ['./payment-method-page.component.css']
})
export class PaymentMethodPageComponent {
    
    errorMessage: string = "";
    paymentMethod: string = "";
    showEndOfDemoModal: boolean = false;
    showErrorMessage: boolean = false;
    
    constructor(
        private cartManagementService: CartManagementService,
        private cartService: CartService,
        private router: Router
    ) { }

    buy(): void {
        this.cartService.buy().subscribe({
            error: (err: JavaErrorResponse<string>) => {
                console.log(err)
                this.errorMessage = err.error.data;
                this.showErrorMessage = true;
            },
            next: value => {
                this.showEndOfDemoModal = true;
            }
        })
    }

    goToHomePage(): void {
        this.cartManagementService.clear();
        this.router.navigateByUrl("/")
    }

}
