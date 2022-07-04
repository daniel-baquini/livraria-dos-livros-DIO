import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
        path: ""
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
