import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "../backend/user/user.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private loginService: UserService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(
            request.clone({
                setHeaders: {
                    "x-api-key": this.loginService.authData.token ?? ""
                }
            })
        );
    }
}
