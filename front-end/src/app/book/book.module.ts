import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const bookRoutes: Routes = [
    {
        component: BookDetailPageComponent,
        path: ":id"
    }
];

@NgModule({
    declarations: [
        BookDetailPageComponent
    ],
    imports: [
        RouterModule.forChild(bookRoutes),
        SharedModule
    ]
})
export class BookModule { }
