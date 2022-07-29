import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartManagementService } from 'src/app/cart/cart-management.service';
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

    constructor(
        private activatedRoute: ActivatedRoute,
        bookService: BookService,
        private cartManagementService: CartManagementService,
        private router: Router
    ) {
        const routeId: any = activatedRoute.snapshot.params["id"];
        if(routeId === undefined) {
            this.router.navigateByUrl("/")
        }

        bookService.read(routeId).subscribe(x => {
            this.book = x;
        });
    }

    get isItemOnCart(): boolean {
        return this.cartManagementService.isOnCart(
            parseInt(this.activatedRoute.snapshot.params['id'])            
        );
    }

    get priceInCentavos(): string {
        if(!this.book) return "";

        return `${Math.floor((this.book.price - Math.floor(this.book.price))*100)}`.padEnd(2, "0");
    }

    get priceInReal(): number {
        if(!this.book) return 0;

        return Math.floor(this.book.price);
    }

    addToCart(): void {
        // This function is called only from a element that will be rendered when this.book !== undefined,
        // so, we can use the "!".
        this.cartManagementService.addItem(this.book!);
    }

    buyNow(): void {
        this.addToCart();
        this.router.navigateByUrl("/cart");
    }

    toggleShowInstallmentModal(): void {
        this.showInstallmentModal = !this.showInstallmentModal;
    }

}
