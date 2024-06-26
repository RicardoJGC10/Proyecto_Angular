import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './layout/publico/login/login/login.component';
import { FormsModule } from '@angular/forms';
import { AutentifacionService } from './shared/servicios/autentifacion.service';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EstadisticasComponent } from './layout/estadisticas/estadisticas/estadisticas.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, FormsModule,EstadisticasComponent,CommonModule,UsuariosComponent,RouterModule,NgApexchartsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-angular';

  constructor(private loginPrd:AutentifacionService) {}

  
}
