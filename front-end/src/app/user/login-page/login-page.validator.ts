import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
class LoginPageValidator {

    password(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { "password": "Necessário fornecer uma senha" }
        }

        return null;
    }

    username(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value ?? ""}`.trim()

        if(value.length === 0) {
            return { email: "Necessário fornecer um email" }
        }

        if(!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))) {
            return { 'email': "Formato de e-mail inválido." };
        }

        return null;
    }
    
}

export default LoginPageValidator