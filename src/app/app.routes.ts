import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/publico/login/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard/dashboard.component';
import { EstadisticasComponent } from './layout/estadisticas/estadisticas/estadisticas.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'estadisticas', component: EstadisticasComponent, canActivate:[AuthGuard] },

  // Otras rutas aquí
];