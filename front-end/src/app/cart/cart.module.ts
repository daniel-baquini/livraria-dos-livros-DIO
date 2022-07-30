import { CartItemComponent } from './cart-item/cart-item.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { DeliveryAddressPageComponent } from './delivery-address-page/delivery-address-page.component';
import { NgModule } from '@angular/core';
import { PaymentMethodPageComponent } from './payment-method-page/payment-method-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IsAuthenticatedGuard } from '../user/is-authenticated.guard';

const cartRoutes: Routes = [
    {
        component: CartPageComponent,
        path: ""
    },
    {
        component: DeliveryAddressPageComponent,
        canActivate: [IsAuthenticatedGuard],
        path: "delivery-address"
    },
    {
        component: PaymentMethodPageComponent,
        canActivate: [IsAuthenticatedGuard],
        path: "payment-method"
    }
];

@NgModule({
    declarations: [
        CartItemComponent,
        CartPageComponent,
        DeliveryAddressPageComponent,
        PaymentMethodPageComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(cartRoutes),
        SharedModule
    ]
})
export class CartModule { }
