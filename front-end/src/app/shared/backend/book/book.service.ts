import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudBackendService } from '../crud-backend.service';
import Book from './book.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    public readonly controllerPath: string = "book";

    constructor(private crudBackendService: CrudBackendService) { }

    create(model: Book): Promise<void> {
        throw new Error('Method not implemented.');
    }

    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    read(id: any): Observable<Book | undefined> {
        return this.crudBackendService.read<Book>(this.controllerPath, id);
    }

    readAll(): Observable<Book[]> {
        return this.crudBackendService.readAll<Book>(this.controllerPath);
    }

    update(model: Book): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
