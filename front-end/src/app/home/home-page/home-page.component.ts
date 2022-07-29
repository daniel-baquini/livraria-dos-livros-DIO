import { BookService } from 'src/app/shared/backend/book/book.service';
import { Component, OnInit } from '@angular/core';
import { UserPreferencesService } from 'src/app/shared/services/user-preferences/user-preferences.service';
import Book from 'src/app/shared/backend/book/book.model';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    
    books: Book[] = [];

    constructor(
        private bookService: BookService,
        private userPreferencesService: UserPreferencesService
    ) { }

    ngOnInit(): void {
        this.bookService.readAll().subscribe(x => {
            this.books = x;
            console.log(x);
        });
    }
    
    get showWelcomeModal(): boolean {
        return this.userPreferencesService.userPreferences.showWelcomeModal;
    }

    closeButtonClick(): void {
        this.userPreferencesService.setProperty("showWelcomeModal", false);
    }

}
