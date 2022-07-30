import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../shared/backend/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if(!this.userService.isAuthenticated) {
                this.router.navigate(
                    ["/user"],
                    {
                        queryParams: {
                            "return-to": route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/')
                        }
                    }
                );
                return false;
            }
            return true;
        }
        
    }
    