import { Injectable } from '@angular/core';
import Book from './book.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    
    constructor() { }

    create(model: Book): Promise<void> {
        throw new Error('Method not implemented.');
    }

    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    read(id: string): Promise<Book | undefined> {
        throw new Error('Method not implemented.');
    }

    readAll(): Promise<Book[]> {
        throw new Error('Method not implemented.');
    }

    update(model: Book): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
