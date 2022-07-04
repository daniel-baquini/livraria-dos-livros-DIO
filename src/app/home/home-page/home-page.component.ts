import { Component } from '@angular/core';
import { UserPreferencesService } from 'src/app/shared/services/user-preferences/user-preferences.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
    
    constructor(private userPreferencesService: UserPreferencesService) { }
    
    get showWelcomeModal(): boolean {
        return this.userPreferencesService.userPreferences.showWelcomeModal;
    }

    closeButtonClick(): void {
        this.userPreferencesService.setProperty("showWelcomeModal", false);
    }

}