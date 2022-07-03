import { BookPreviewComponent } from './book-preview/book-preview.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        BookPreviewComponent,
        ButtonComponent
    ],
    exports: [
        BookPreviewComponent,
        ButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
