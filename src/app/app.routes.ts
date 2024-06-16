import { Routes } from '@angular/router';
import { LoginComponent } from './layout/publico/login/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';



export const routes: Routes = [
    
    { path: 'login', component: LoginComponent},

    { path: 'usuarios', component: UsuariosComponent},


    {path: '', redirectTo: 'login', pathMatch: 'full'},

];


