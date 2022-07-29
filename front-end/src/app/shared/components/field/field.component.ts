import BaseField from '../../utils/BaseField.model';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import HTMLInputType from '../../utils/html-input-type.type';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css'],
    providers: [
        {
            multi: true,
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => FieldComponent)
        }
    ]
})
export class FieldComponent extends BaseField implements OnInit {

    @Input() label: string | undefined;
    @Input() type: HTMLInputType = "text"

    _type: HTMLInputType = this.type;

    ngOnInit(): void {
        this._type = this.type;
    }

    togglePasswordView(): void {
        if(this.type !== "password") return

        this._type = (this._type === this.type ? "text" : this.type);
    }
}
