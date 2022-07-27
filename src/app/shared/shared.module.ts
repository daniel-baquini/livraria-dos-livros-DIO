import { AlertComponent } from './components/alert/alert.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { FieldComponent } from './components/field/field.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { SmallButtonComponent } from './components/small-button/small-button.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [
        AlertComponent,
        BookPreviewComponent,
        ButtonComponent,
        DefaultPageComponent,
        FieldComponent,
        LogoComponent,
        ModalComponent,
        NavComponent,
        SmallButtonComponent
    ],
    exports: [
        AlertComponent,
        BookPreviewComponent,
        ButtonComponent,
        CommonModule,
        DefaultPageComponent,
        FieldComponent,
        LogoComponent,
        ModalComponent,
        NavComponent,
        SmallButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
