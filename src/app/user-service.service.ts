// src/app/services/user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private firstNameKey = 'firstName';


  constructor() {}

  setFirstName(name: string){
    localStorage.setItem(this.firstNameKey, name);

  }

  getFirstName(): string{
    return localStorage.getItem(this.firstNameKey) || '';

  }
  clearFirstName() {
    localStorage.removeItem(this.firstNameKey);
  }
}
