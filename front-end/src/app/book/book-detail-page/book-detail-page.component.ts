import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Book from 'src/app/shared/backend/book/book.model';
import { BookService } from 'src/app/shared/backend/book/book.service';

@Component({
    selector: 'app-book-detail-page',
    templateUrl: './book-detail-page.component.html',
    styleUrls: ['./book-detail-page.component.css']
})
export class BookDetailPageComponent {

    book: Book | undefined;
    showInstallmentModal: boolean = false;

    constructor(activatedRoute: ActivatedRoute, bookService: BookService, router: Router) {
        const routeId: any = activatedRoute.snapshot.params["id"];
        if(routeId === undefined) {
            router.navigateByUrl("/")
        }

        bookService.read(routeId).subscribe(x => {
            this.book = x;
        });
    }

    get priceInCentavos(): string {
        if(!this.book) return "";

        return `${Math.floor((this.book.price - Math.floor(this.book.price))*100)}`.padEnd(2, "0");
    }

    get priceInReal(): number {
        if(!this.book) return 0;

        return Math.floor(this.book.price);
    }

    toggleShowInstallmentModal(): void {
        this.showInstallmentModal = !this.showInstallmentModal;
    }

}
