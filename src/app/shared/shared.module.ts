import { AlertComponent } from './alert/alert.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { ButtonComponent } from './button/button.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { NgModule } from '@angular/core';
import { SmallButtonComponent } from './small-button/small-button.component';

@NgModule({
    declarations: [
        AlertComponent,
        BookPreviewComponent,
        ButtonComponent,
        CartItemComponent,
        LogoComponent,
        SmallButtonComponent
    ],
    exports: [
        AlertComponent,
        BookPreviewComponent,
        ButtonComponent,
        CartItemComponent,
        LogoComponent,
        SmallButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
