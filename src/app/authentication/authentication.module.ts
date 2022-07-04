import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
