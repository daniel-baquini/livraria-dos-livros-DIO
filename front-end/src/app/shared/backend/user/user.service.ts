import { Observable, mergeMap, throwError, of, firstValueFrom } from 'rxjs';
import { CrudBackendService } from '../crud-backend.service';
import { Injectable } from '@angular/core';
import User from './user.model';
import Login from './login.model';
import { DefaultHttpService } from '../../services/default-http/default-http.service';
import { environment } from 'src/environments/environment';
import LoginReturn from './login-return.model';
import UserPublicData from './user-public-data.model';
import AuthData from './auth-data.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    public authData: Partial<AuthData> = { };
    public readonly controllerPath: string = "user";

    constructor(
        private crudBackendService: CrudBackendService,
        private defaultHttpService: DefaultHttpService
    ) {
        this.authData.token = this.jwtToken;
        this.authData.userPublicData = this.userPublicData;
    }

    get isAuthenticated(): boolean {
        return !!this.authData.token;
    }

    private get jwtToken(): undefined | string {
        const value = localStorage.getItem("jwtToken");
        return value === null ? undefined : value;
    }

    private set jwtToken(value: undefined | string) {
        this.authData.token = value;

        value === undefined ?
            localStorage.removeItem("jwtToken") :
            localStorage.setItem("jwtToken", value);
    }

    private get userPublicData(): undefined | UserPublicData {
        const updString = localStorage.getItem("userPublicData");
        if(updString === null) {
            return undefined;
        }

        return JSON.parse(updString) as UserPublicData;
    }

    private set userPublicData(value: undefined | UserPublicData) {
        this.authData.userPublicData = value;

        value === undefined ?
            localStorage.removeItem("userPublicData") :
            localStorage.setItem("userPublicData", JSON.stringify(value));
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

                    this.jwtToken = value.data.token;
                    this.userPublicData = value.data.userPublicData;

                    resolve(value);
                }
            })
        });
    }

    logOut(): void {
        this.jwtToken = undefined;
        this.userPublicData = undefined;
    }
    
}
