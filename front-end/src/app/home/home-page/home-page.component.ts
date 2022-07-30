import Book from 'src/app/shared/backend/book/book.model';
import { BookService } from 'src/app/shared/backend/book/book.service';
import { Component } from '@angular/core';
import { UserPreferencesService } from 'src/app/shared/services/user-preferences/user-preferences.service';
import { debounceTime, distinctUntilChanged, filter, of, switchMap } from 'rxjs';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
    
    books: Book[] = [];
    canLoadMore: boolean = false;
    filteredBooks: Book[] | undefined;
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

    onSearch(event: Event): void {
        const value: string = (event.target as HTMLInputElement).value

        if(value.length < 2) {
            this.filteredBooks = undefined;
            return;
        }

        of(value).pipe(
            debounceTime(250),
            distinctUntilChanged(),
            switchMap(searchTerm => this.bookService.filter(searchTerm))
        ).subscribe(x => {
            this.filteredBooks = x;
        })
    }

}
