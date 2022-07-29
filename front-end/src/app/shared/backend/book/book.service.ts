import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudBackendService } from '../crud-backend.service';
import Book from './book.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    
    constructor(private crudBackendService: CrudBackendService) { }

    create(model: Book): Promise<void> {
        throw new Error('Method not implemented.');
    }

    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    read(id: string): Promise<Book | undefined> {
        throw new Error('Method not implemented.');
    }

    readAll(): Observable<Book[]> {
        return this.crudBackendService.readAll<Book>("book");
    }

    update(model: Book): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
