import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutentifacionService } from '../../../../shared/servicios/autentifacion.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public myform!:FormGroup;

  constructor(private fb:FormBuilder, private loginPrd:AutentifacionService) {}

  ngOnInit(): void {
    this.myform = this.createMyForm();
    
  }
  private createMyForm():FormGroup{
    return this.fb.group({
      name:['',[Validators.required]],
      username:['',Validators.required]
    });
  }
  public submitFormulario(){
    if(this.myform.invalid){
      Object.values(this.myform.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }

    if(!this.loginPrd.ingresarAplicativo(this.myform.value)){
      alert("Usuario o Contraseña Invalido");
    }

  }
  public get f():any{
    return this.myform.controls;
  }

  myimage:string = "images/Logo.png";



}
