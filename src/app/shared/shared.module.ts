import { BookPreviewComponent } from './book-preview/book-preview.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmallButtonComponent } from './small-button/small-button.component';

@NgModule({
    declarations: [
        BookPreviewComponent,
        ButtonComponent,
        SmallButtonComponent
    ],
    exports: [
        BookPreviewComponent,
        ButtonComponent,
        SmallButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
