import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = 'http://165.227.119.16:8000/api/categorias';


  constructor(private http:HttpClient) { }

  getCategorias():Observable<any>{
    return this.http.get<any>(this.API_URL).pipe(res=>res);
  }
}
