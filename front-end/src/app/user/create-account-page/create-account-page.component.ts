import { Component } from '@angular/core';
import CreateAccountPageValidator from './create-account-page.validator';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/backend/user/user.service';

@Component({
    selector: 'app-create-account-page',
    templateUrl: './create-account-page.component.html',
    styleUrls: ['./create-account-page.component.css']
})
export class CreateAccountPageComponent {

    form: FormGroup;

    constructor(
        formBuilder: FormBuilder,
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
        console.log(JSON.stringify(this.form.value));
        this.userService.create(this.form.value).subscribe(x => {
            console.log(x);
        });
    }

}