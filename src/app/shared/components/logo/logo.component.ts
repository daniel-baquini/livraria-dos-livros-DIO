import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.css']
})
export class LogoComponent {

    constructor(private router: Router) { }

    @HostListener("click", [])
    onHostClick() {
        this.router.navigateByUrl("");
    }

}
