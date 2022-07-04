import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const authenticationRoutes: Routes = [
    {
        component: LoginPageComponent,
        path: ""
    },
    {
        component: CreateAccountPageComponent,
        path: "create-account"
    }
];

@NgModule({
    declarations: [
        CreateAccountPageComponent,
        LoginPageComponent
    ],
    imports: [
        RouterModule.forChild(authenticationRoutes),
        SharedModule
    ]
})
export class AuthenticationModule { }
