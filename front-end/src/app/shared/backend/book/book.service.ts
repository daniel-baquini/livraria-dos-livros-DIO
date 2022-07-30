import Book from './book.model';
import { CrudBackendService } from '../crud-backend.service';
import { DefaultHttpService } from '../../services/default-http/default-http.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    public readonly controllerPath: string = "book";

    constructor(private crudBackendService: CrudBackendService,
        private defaultHttpService: DefaultHttpService
    ) { }

    filter(conditon: string): Observable<Book[] | undefined> {
        return this.defaultHttpService.get<Book[] | undefined>(
            `${environment.backendUrl}/api/${this.controllerPath}/filter/${conditon}`,
        )
    }

    read(id: any): Observable<Book | undefined> {
        return this.crudBackendService.get<Book>(this.controllerPath, id);
    }

    readAll(page: number): Observable<Book[] | undefined> {
        return this.defaultHttpService.get<Book[] | undefined>(
            `${environment.backendUrl}/api/${this.controllerPath}/getAll/${page}`,
        )
    }

}
