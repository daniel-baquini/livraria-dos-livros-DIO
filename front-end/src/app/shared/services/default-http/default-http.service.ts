import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DefaultHttpService {
    
    private defaultHeaders = {
        headers: { "Content-type": "application/json" }
    };

    constructor(private httpClient: HttpClient) { }

    get<T>(path: string): Observable<T> {
        return this.httpClient.get<T>(path, this.defaultHeaders)
    }

    post<T>(path: string, model: any): Observable<T> {
        return this.httpClient.post<T>(path, model, this.defaultHeaders);
    }

}
