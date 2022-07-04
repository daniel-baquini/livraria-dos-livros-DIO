import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Input() closeButtonLabel: string = "Fechar";
    @Input() modalTextContent: string = "";
    @Input() modalTitle: string = "";

    @Output() closeButtonClick = new EventEmitter();
}
