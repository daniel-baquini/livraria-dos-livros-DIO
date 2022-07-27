
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const cartRoutes: Routes = [
    {
        component: CartPageComponent,
        path: ""
    }
];


@NgModule({
    declarations: [
        CartItemComponent,
        CartPageComponent
    ],
    imports: [
        RouterModule.forChild(cartRoutes),
        SharedModule
    ]
})
export class CartModule { }
