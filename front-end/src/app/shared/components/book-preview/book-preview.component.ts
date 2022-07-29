import Book from '../../backend/book/book.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent {
    
    @Input() book: Book | undefined;
    
    get priceInCentavos(): string {
        if(!this.book) return "";

        return `${Math.floor((this.book.price - Math.floor(this.book.price))*100)}`.padEnd(2, "0");
    }

    get priceInReal(): number {
        if(!this.book) return 0;

        return Math.floor(this.book.price);
    }

}
