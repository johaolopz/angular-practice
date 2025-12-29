import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    standalone: false,
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class LoginComponent {
    isLoading = false;

    constructor(private authService: AuthService, private router: Router) { }

    onLogin(): void {
        this.isLoading = true;
        setTimeout(() => {
            this.authService.login();
            this.isLoading = false;
            console.log('Login successful, navigating...');
            this.router.navigateByUrl('/tasks').then(success => {
                if (success) {
                    alert('Inició de sesión satisfactorio');
                } else {
                    console.error('Navigation to /tasks failed');
                }
            });
        }, 2000);
    }
}
