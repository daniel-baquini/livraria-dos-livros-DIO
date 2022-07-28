import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CrudBackendService {
    
    constructor(private httpClient: HttpClient) { }

    create<T>(model: any): Promise<T> {
        throw new Error('Method not implemented.');
        
        return firstValueFrom(
            this.httpClient.post<T>(
                environment.backendUrl,
                JSON.stringify(model),
                { headers: { "Content-type": "application/json" } }
            )
        );
    }
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    read(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    readAll(): Promise<any[]> {
        throw new Error('Method not implemented.');
    }
    update(model: any): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
