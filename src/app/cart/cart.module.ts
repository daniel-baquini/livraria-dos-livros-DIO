
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DeliveryAddressPageComponent } from './delivery-address-page/delivery-address-page.component';

const cartRoutes: Routes = [
    {
        component: CartPageComponent,
        path: ""
    },
    {
        component: DeliveryAddressPageComponent,
        path: "delivery-address"
    }
];


@NgModule({
    declarations: [
        CartItemComponent,
        CartPageComponent,
        DeliveryAddressPageComponent
    ],
    imports: [
        RouterModule.forChild(cartRoutes),
        SharedModule
    ]
})
export class CartModule { }
