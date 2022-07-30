import { Observable, mergeMap, throwError, of, firstValueFrom } from 'rxjs';
import { CrudBackendService } from '../crud-backend.service';
import { Injectable } from '@angular/core';
import User from './user.model';
import Login from './login.model';
import { DefaultHttpService } from '../../services/default-http/default-http.service';
import { environment } from 'src/environments/environment';
import LoginReturn from './login-return.model';
import UserPublicData from './user-public-data.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    public readonly controllerPath: string = "user";

    constructor(
        private crudBackendService: CrudBackendService,
        private defaultHttpService: DefaultHttpService
    ) { }

    get isAuthenticated(): boolean {
        return !!localStorage.getItem("jwtToken");
    }

    get jwtToken(): null | string {
        return localStorage.getItem("jwtToken");
    }

    get userPublicData(): null | UserPublicData {
        const updString = localStorage.getItem("userPublicData");
        if(updString === null) {
            return null;
        }

        return JSON.parse(updString) as UserPublicData;
    }

    create(model: User): Observable<string> {
        return this.crudBackendService.create<User>(this.controllerPath, model);
    }

    async login(login: Login): Promise<LoginReturn> {
        return new Promise<LoginReturn>((resolve, reject) => {
            this.defaultHttpService.post<LoginReturn>(
                `${environment.backendUrl}/api/${this.controllerPath}/login`,
                login
            ).subscribe({
                error: err => reject(err),
                next: (value: LoginReturn) => {
                    localStorage.setItem("jwtToken", value.data.token)
                    localStorage.setItem("userPublicData", JSON.stringify(value.data.userPublicData));
                    resolve(value);
                }
            })
        });
    }

    logOut(): void {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("userPublicData");
    }
    
}
