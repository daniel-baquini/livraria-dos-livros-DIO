import { Observable } from 'rxjs';
import { CrudBackendService } from '../crud-backend.service';
import { Injectable } from '@angular/core';
import User from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    public readonly controllerPath: string = "user";

    constructor(private crudBackendService: CrudBackendService) { }

    create(model: User): Observable<string> {
        return this.crudBackendService.create<User>(this.controllerPath, model);
    }
}
