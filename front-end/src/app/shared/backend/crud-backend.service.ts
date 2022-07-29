import { environment } from 'src/environments/environment';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CrudBackendService {
    
    constructor(private httpClient: HttpClient) { }

    create<T>(controllerPath: string, model: T): Observable<string> {
        return this.httpClient.post<string>(
            `${environment.backendUrl}/api/${controllerPath}/create`,
            model,
            { headers: { "Content-type": "application/json" } }
        );
    }
    
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    
    read<T>(controllerPath: string, id: any): Observable<T | undefined> {
        return this.httpClient.get<T | undefined>(
            `${environment.backendUrl}/api/${controllerPath}/get/${id}`,
            { headers: { "Content-type": "application/json" } }
        )
    }

    readAll<T>(controllerPath: string): Observable<T[]> {
        return this.httpClient.get<T[]>(
            `${environment.backendUrl}/api/${controllerPath}/getAll`,
            { headers: { "Content-type": "application/json" } }
        )
    }

    update(model: any): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
