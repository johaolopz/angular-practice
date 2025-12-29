import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

    constructor() { }

    private hasToken(): boolean {
        if (typeof localStorage !== 'undefined') {
            return localStorage.getItem('isLoggedIn') === 'true';
        }
        return false;
    }

    isLoggedIn(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }

    get isLoggedInValue(): boolean {
        return this.loggedIn.value;
    }

    login(): void {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('isLoggedIn', 'true');
        }
        this.loggedIn.next(true);
    }

    logout(): void {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('isLoggedIn');
        }
        this.loggedIn.next(false);
    }
}
