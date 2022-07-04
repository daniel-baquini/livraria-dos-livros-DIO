import { Injectable } from '@angular/core';
import UserPreferences from './user-preferences.model';

const defaultUserPreferences: UserPreferences = {
    showWelcomeModal: true
}

@Injectable({
    providedIn: 'root'
})
export class UserPreferencesService {
    
    public readonly userPreferencesKey: string = "user-preferences";

    constructor() {
        const userPreferencesString: null | string = localStorage.getItem(this.userPreferencesKey);
        let userPreferences: UserPreferences;

        if(userPreferencesString === null) {
            userPreferences = defaultUserPreferences;
            return
        }
        else {        
            userPreferences = JSON.parse(userPreferencesString);
            let key: keyof typeof defaultUserPreferences;
    
            // After an update on user preferences, if a new key is create, it will be assigned to the
            // already existing preferences.
            for(key in defaultUserPreferences) {
                if(!(key in Object.keys(userPreferences))) {
                    userPreferences[key] = defaultUserPreferences[key];
                }
            }
        }

        localStorage.setItem(this.userPreferencesKey, JSON.stringify(defaultUserPreferences));
    }

    get userPreferences(): UserPreferences {
        // The object will not return null, because it's initialized in the service constructor
        return JSON.parse(localStorage.getItem(this.userPreferencesKey)!)
    }

    setProperty<K extends keyof UserPreferences>(propertyName: K, value: UserPreferences[K]) {
        const userPreferences = this.userPreferences;
        userPreferences[propertyName] = value;

        localStorage.setItem(this.userPreferencesKey, JSON.stringify(userPreferences));
    }

}
