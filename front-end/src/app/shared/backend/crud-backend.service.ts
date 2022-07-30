import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DefaultHttpService } from '../services/default-http/default-http.service';

@Injectable({
    providedIn: 'root'
})
export class CrudBackendService {
    
    constructor(private defaultHttpService: DefaultHttpService) { }

    create<T>(controllerPath: string, model: T): Observable<string> {
        return this.defaultHttpService.post(
            `${environment.backendUrl}/api/${controllerPath}/create`,
            model
        );
    }
    
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    
    get<T>(controllerPath: string, id: any): Observable<T | undefined> {
        return this.defaultHttpService.get(
            `${environment.backendUrl}/api/${controllerPath}/get/${id}`
        );
    }

    getAll<T>(controllerPath: string): Observable<T[]> {
        return this.defaultHttpService.get<T[]>(
            `${environment.backendUrl}/api/${controllerPath}/getAll`
        )
    }

    update(model: any): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
