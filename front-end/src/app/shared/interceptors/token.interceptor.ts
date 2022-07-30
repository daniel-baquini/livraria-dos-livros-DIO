import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Observable, switchMap, take, throwError } from "rxjs";
import JavaErrorResponse from "../backend/server-response/java-error-response.model";

import { UserService } from "../backend/user/user.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    constructor(private router: Router, private userService: UserService) {}
    
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const authRequest = request.clone({ setHeaders: { "x-api-key": this.userService.authData.token ?? "" }});

        return next.handle(authRequest)
        .pipe(
            catchError((error: JavaErrorResponse<string>) => {
                if((error.error && error.error.invalidJwt) || error.status === 401) {
                    const retrySubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
                    
                    this.userService.logOut();
                    return retrySubject.pipe(
                        take(1),
                        switchMap(x => next.handle(
                            request.clone({ setHeaders: { "x-api-key": "" }})
                        )),
                        // from now on, all authentication/authorization errors are because
                        // we are not loggedin, so, we just move to login page
                        catchError((x: JavaErrorResponse<string>) => {
                            if(x.status >= 400) {
                                this.router.navigateByUrl("/user")
                            }

                            return throwError(x);
                        })
                    );
                }

                return throwError(error);
            })
        );
    }

}
    