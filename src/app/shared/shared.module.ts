import { BookPreviewComponent } from './book-preview/book-preview.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        BookPreviewComponent
    ],
    exports: [
        BookPreviewComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
