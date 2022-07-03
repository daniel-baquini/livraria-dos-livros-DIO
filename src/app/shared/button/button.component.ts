import { Component } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    label: string = "hey";
    type: "primary" | "search" | "secondary" = "secondary";
}
