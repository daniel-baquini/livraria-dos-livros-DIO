import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Input() closeButtonLabel: string = "Fechar";
    @Input() textContent: string = "";
    @Input() title: string = "";

    @Output() closeButtonClick = new EventEmitter();
}
