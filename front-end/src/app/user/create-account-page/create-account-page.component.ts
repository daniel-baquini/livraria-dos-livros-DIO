import { Component } from '@angular/core';
import CreateAccountPageValidator from './create-account-page.validator';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/backend/user/user.service';
import { Router } from '@angular/router';
import JavaErrorResponse from 'src/app/shared/backend/server-response/java-error-response.model';

@Component({
    selector: 'app-create-account-page',
    templateUrl: './create-account-page.component.html',
    styleUrls: ['./create-account-page.component.css']
})
export class CreateAccountPageComponent {

    errorMessage: string = "";
    form: FormGroup;
    showAlert: boolean = false;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        validator: CreateAccountPageValidator
    ) {
        this.form = formBuilder.group({
            name: new FormControl("", validator.name),
            password: new FormControl("", validator.password),
            surname: new FormControl("", validator.surname),
            username: new FormControl("", validator.username)
        });
    }

    createAccount(): void {
        this.userService.create(this.form.value).subscribe({
            error: ((x: JavaErrorResponse<string>) => {
                this.errorMessage = x.error.data;
                this.showAlert = true;
            }),
            next: value => {
                this.router.navigateByUrl("/user");
            }
        });
    }

}