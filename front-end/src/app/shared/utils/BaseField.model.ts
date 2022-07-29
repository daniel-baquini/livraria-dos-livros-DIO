import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import BaseControlValueAcessor from "./BaseControlValueAcessor.model";

@Component({
    template: ""
})
class BaseField extends BaseControlValueAcessor {

    onChangeFn: (value: Event) => void = (value: Event) => {
        this.baseOnChangeFn(
            (value.target as HTMLInputElement).value
        );
    }

    onTouchedFn: () => void = () => {
        this.baseOnTouchedFn();
    };

    @Input() abstractControl: AbstractControl | undefined;

    get fieldError(): string {
        if(
            !this.abstractControl ||
            !this.abstractControl.errors ||
            (this.abstractControl && this.abstractControl.untouched)
        ) {
            return "";
        }

        for(let key in this.abstractControl.errors) {
            return this.abstractControl.errors[key];
        }

        return "";
    }

}

export default BaseField