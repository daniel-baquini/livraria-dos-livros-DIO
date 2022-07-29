import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const userRoutes: Routes = [
    {
        component: LoginPageComponent,
        path: ""
    },
    {
        component: CreateAccountPageComponent,
        path: "create-account"
    },
    {
        component: ForgotPasswordPageComponent,
        path: "forgot-password"
    }
];

@NgModule({
    declarations: [
        CreateAccountPageComponent,
        ForgotPasswordPageComponent,
        LoginPageComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
        SharedModule
    ]
})
export class UserModule { }
