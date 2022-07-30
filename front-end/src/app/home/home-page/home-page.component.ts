import Book from 'src/app/shared/backend/book/book.model';
import { BookService } from 'src/app/shared/backend/book/book.service';
import { Component, OnInit } from '@angular/core';
import { UserPreferencesService } from 'src/app/shared/services/user-preferences/user-preferences.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
    
    books: Book[] = [];
    canLoadMore: boolean = false;
    private readonly _pageSize: number = 6;

    constructor(
        private bookService: BookService,
        private userPreferencesService: UserPreferencesService
    ) {
        this.loadMore();
    }

    get showWelcomeModal(): boolean {
        return this.userPreferencesService.userPreferences.showWelcomeModal;
    }

    closeButtonClick(): void {
        this.userPreferencesService.setProperty("showWelcomeModal", false);
    }

    loadMore(): void {
        this.bookService.readAll(this.books.length/this._pageSize).subscribe(x => {
            if(x !== undefined) {
                this.books.push(...x);
                this.canLoadMore = x.length === 6;
            }
        });
    }

}
