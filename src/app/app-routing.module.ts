import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

const routes: Routes = [
    {
        loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule),
        path: "authentication"
    },
    {
        loadChildren: () => import("./book/book.module").then(m => m.BookModule),
        path: "book"
    },
    {
        loadChildren: () => import("./cart/cart.module").then(m => m.CartModule),
        path: "cart"
    },
    {
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
        path: ""
    },
    {
        component: NotFoundPageComponent,
        path: "**"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
