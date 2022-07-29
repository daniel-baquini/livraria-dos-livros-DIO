import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import CreateAccountPageValidator from './create-account-page.validator';

@Component({
    selector: 'app-create-account-page',
    templateUrl: './create-account-page.component.html',
    styleUrls: ['./create-account-page.component.css']
})
export class CreateAccountPageComponent {

    form: FormGroup;

    constructor(formBuilder: FormBuilder, validator: CreateAccountPageValidator) {
        this.form = formBuilder.group({
            email: new FormControl("", validator.email),
            name: new FormControl("", validator.name),
            password: new FormControl("", validator.password),
            surname: new FormControl("", validator.surname)
        });
    }

}