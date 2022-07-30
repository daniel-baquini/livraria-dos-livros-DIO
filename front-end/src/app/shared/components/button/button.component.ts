import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() disabled: boolean = false;
    @Input() label: string = "";
    @Input() type: "primary" | "search" | "secondary" = "primary";

    @Output() btnClick = new EventEmitter();

    onBtnClick(): void {
        if(!this.disabled) {
            this.btnClick.emit();
        }
    }
}
