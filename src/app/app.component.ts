import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './layout/publico/login/login/login.component';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './layout/privado/principal/principal.component';
import { AutentifacionService } from './shared/servicios/autentifacion.service';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './components/usuarios/usuarios.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, FormsModule,PrincipalComponent,CommonModule,UsuariosComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-angular';

  constructor(private loginPrd:AutentifacionService) {}

  public visualizarMenu():boolean{
    return this.loginPrd.habilitarlogeo();

  }
}
