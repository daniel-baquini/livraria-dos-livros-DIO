import { CreateAccountComponent } from './create-account/create-account.component';
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
        component: CreateAccountComponent,
        path: "create-account"
    }
]

@NgModule({
    declarations: [
        LoginPageComponent,
        CreateAccountComponent
    ],
    imports: [
        RouterModule.forChild(authenticationRoutes),
        SharedModule
    ]
})
export class AuthenticationModule { }
