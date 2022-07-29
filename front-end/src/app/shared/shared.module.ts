import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { FieldComponent } from './components/field/field.component';
import { HttpClientModule } from '@angular/common/http'
import { LogoComponent } from './components/logo/logo.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SmallButtonComponent } from './components/small-button/small-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AlertComponent,
        ButtonComponent,
        DefaultPageComponent,
        FieldComponent,
        LogoComponent,
        ModalComponent,
        NotFoundPageComponent,
        NavComponent,
        SmallButtonComponent
    ],
    exports: [
        AlertComponent,
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
        CommonModule,
        HttpClientModule,
        RouterModule
    ]
})
export class SharedModule { }
