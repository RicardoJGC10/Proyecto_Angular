import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, CategoriasInterface } from '../../../modelos/categorias.interface';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = 'http://165.227.119.16:8000/api/categorias';


  constructor(private http:HttpClient) { }

  getCategorias():Observable<any>{
    return this.http.get<any>(this.API_URL).pipe(res=>res);
  }
  createCategoria(categorias: CategoriasInterface): Observable<ApiResponse<CategoriasInterface>> {
    return this.http.post<ApiResponse<CategoriasInterface>>(this.API_URL, categorias);
  }

  deleteCategoria(id: string): Observable<ApiResponse<CategoriasInterface>> {
    return this.http.delete<ApiResponse<CategoriasInterface>>(`${this.API_URL}/${id}`);
  }

  updateCategoria(id: string, categorias: CategoriasInterface): Observable<ApiResponse<CategoriasInterface>> {
    console.log(`Updating category with ID: ${id}`, categorias); // Mensaje de depuración
    return this.http.put<ApiResponse<CategoriasInterface>>(`${this.API_URL}/${id}/`, categorias);
  }
}
