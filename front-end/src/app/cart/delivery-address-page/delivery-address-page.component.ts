import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import DeliveryAddressPageValidator from './delivery-address-page.validator';

@Component({
    selector: 'app-delivery-address-page',
    templateUrl: './delivery-address-page.component.html',
    styleUrls: ['./delivery-address-page.component.css']
})
export class DeliveryAddressPageComponent {
    
    form: FormGroup;

    constructor(formBuilder: FormBuilder, private router: Router, validator: DeliveryAddressPageValidator) {
        this.form = formBuilder.group({
            CEP: new FormControl(""),
            street: new FormControl("", validator.street),
            number: new FormControl("", validator.number),
            district: new FormControl("", validator.district),
            city: new FormControl("", validator.city),
            state: new FormControl("", validator.state),
            supplement: new FormControl("")
        });
    }

    goToPaymentMethod(): void {
        this.router.navigateByUrl("/cart/payment-method");
    }
        
}
