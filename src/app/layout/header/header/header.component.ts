import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard/dashboard.component';
import { UserService } from '../../../user-service.service';
import { AuthService } from '../../../auth-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,DashboardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  firstName: string = '';

  constructor(private userService: UserService, private router: Router,private authService: AuthService) {}

  ngOnInit(): void {
    this.firstName = this.userService.getFirstName();
    console.log('FirstName in dashboard:', this.firstName);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirige a la vista de login después del cierre de sesión

  }


}
