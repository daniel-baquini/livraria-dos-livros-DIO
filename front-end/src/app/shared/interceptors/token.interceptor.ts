import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, pipe, retry } from "rxjs";
import ApiReturn from "../backend/server-response/api-return.model";
import JavaErrorResponse from "../backend/server-response/java-error-response.model";
import { UserService } from "../backend/user/user.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(
            request.clone({
                setHeaders: {
                    "x-api-key": this.userService.authData.token ?? ""
                }
            })
        ).pipe(
            // When jwt is invalid, will logout user and try again
            catchError((error: JavaErrorResponse<ApiReturn<string>>) => {
                if(error.error.invalidJwt) {
                    this.userService.logOut();
                }

                request = request.clone({ setHeaders: { "x-api-key": ""}})
                return next.handle(request);
            }),
            retry(1)
        );
    }
}
