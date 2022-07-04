import { BookPreviewComponent } from './book-preview/book-preview.component';
import { ButtonComponent } from './button/button.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmallButtonComponent } from './small-button/small-button.component';

@NgModule({
    declarations: [
        BookPreviewComponent,
        ButtonComponent,
        CartItemComponent,
        SmallButtonComponent
    ],
    exports: [
        BookPreviewComponent,
        ButtonComponent,
        CartItemComponent,
        SmallButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
