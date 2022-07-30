import { CartManagementService } from 'src/app/cart/cart-management.service';
import { DefaultHttpService } from '../../services/default-http/default-http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ApiReturn from '../server-response/api-return.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public readonly controllerPath: string = "cart";

    constructor(
        private cartManagementService: CartManagementService,
        private defaultHttpService: DefaultHttpService
    ) { }

    buy(): Observable<ApiReturn<string>> {
        return this.defaultHttpService.post<ApiReturn<string>>(
            `${environment.backendUrl}/api/${this.controllerPath}/buy`,
            this.cartManagementService.cart
        )
    }

}
