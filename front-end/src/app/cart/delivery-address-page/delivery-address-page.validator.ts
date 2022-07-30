import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})
class DeliveryAddressPageValidator {

    street(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { "street": "Necessário fornecer um logradouro" }
        }

        return null;
    }

    number(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { "number": "Necessário fornecer um número " }
        }

        return null;
    }

    district(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { "district": "Necessário fornecer um bairro" }
        }

        return null;
    }

    city(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { "city": "Necessário fornecer uma cidade" }
        }

        return null;
    }

    state(control: AbstractControl): null | ValidationErrors {
        const value = `${control.value ?? ""}`.trim();

        if(value.length === 0) {
            return { "state": "Necessário fornecer um estado" }
        }

        return null;
    }
    
}

export default DeliveryAddressPageValidator