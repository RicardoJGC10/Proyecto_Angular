import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar/sidebar.component';
import { AuthService } from '../../../auth-service.service';
import { Router } from '@angular/router';
import { UserService } from '../../../user-service.service';
import { HeaderComponent } from '../../header/header/header.component';
import { FooterComponent } from '../../footer/footer/footer.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,HeaderComponent,FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  firstName: string = '';

  lastName: string = '';





  constructor(private userService: UserService, private router: Router,private authService: AuthService) {}

  ngOnInit(): void {
    this.firstName = this.userService.getFirstName();
    this.lastName = this.userService.getLastName();

    console.log('FirstName in dashboard:', this.firstName);
    console.log('LastName in dashboard:', this.lastName);

  }
  

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirige a la vista de login después del cierre de sesión

  }

}
