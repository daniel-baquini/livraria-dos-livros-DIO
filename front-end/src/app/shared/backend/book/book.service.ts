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

    read(id: any): Observable<Book | undefined> {
        return this.crudBackendService.get<Book>(this.controllerPath, id);
    }

    readAll(): Observable<Book[]> {
        return this.crudBackendService.getAll<Book>(this.controllerPath);
    }

}
