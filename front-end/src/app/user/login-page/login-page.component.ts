import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import LoginPageValidator from './login-page.validator';
import { UserService } from 'src/app/shared/backend/user/user.service';
import JavaErrorResponse from 'src/app/shared/backend/server-response/java-error-response.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    
    errorMessage: string = "";
    form: FormGroup;
    showAlert: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        validator: LoginPageValidator
    ) {
        this.form = formBuilder.group({
            password: new FormControl("", validator.password),
            username: new FormControl("", validator.username)
        });
    }

    private get returnToQueryParam(): string | undefined {
        return this.activatedRoute.snapshot.queryParams["return-to"];
    }

    login(): void {
        this.userService.login(this.form.value)
        .then(x => {
            this.router.navigateByUrl(this.returnToQueryParam ?? "/");
        })
        .catch((x: JavaErrorResponse<string>) => {
            this.errorMessage = x.error.data;
            this.showAlert = true;
        });
    }

}
