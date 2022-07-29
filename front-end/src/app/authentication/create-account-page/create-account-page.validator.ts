import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
    providedIn: "root"
})
class CreateAccountPageValidator {

    email(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value ?? ""}`.trim()

        if(value.length === 0) {
            return { email: "Necessário fornecer um email" }
        }

        if(!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))) {
            return { 'email': "Formato de e-mail inválido." };
        }

        return null;
    }

    name(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { "name": "Necessário fornecer um nome" }
        }

        return null;
    }

    password(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { "password": "Necessário fornecer uma senha" }
        }

        return null;
    }

    surname(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { "surname": "Necessário fornecer um sobrenome" }
        }

        return null;
    }
}

export default CreateAccountPageValidator