import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import JavaErrorResponse from 'src/app/shared/backend/server-response/java-error-response.model';
import { UserService } from 'src/app/shared/backend/user/user.service';
import ForgotPasswordPageValidator from './forgot-password-page.validator';

@Component({
    selector: 'app-forgot-password-page',
    templateUrl: './forgot-password-page.component.html',
    styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent {

    errorMessage: string = "";
    form: FormGroup;
    showAlert: boolean = false;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        validator: ForgotPasswordPageValidator
    ) {
        this.form = formBuilder.group({
            password: new FormControl("", validator.password),
            username: new FormControl("", validator.username)
        });
    }

    retrievePassword(): void {
        this.userService.forgotPassword(this.form.value).subscribe({
            error: ((x: JavaErrorResponse<string>) => {
                console.log(x)
                this.errorMessage = x.error.data;
                this.showAlert = true;
            }),
            next: value => {
                this.router.navigate(
                    ["/user"],
                    {
                        queryParams: {
                            "success-message": value.data
                        }
                    }
                );
            }
        });
    }

}
