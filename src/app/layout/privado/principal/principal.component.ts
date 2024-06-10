import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariosComponent } from '../../../components/usuarios/usuarios.component';






@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet,PrincipalComponent,UsuariosComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }

}
