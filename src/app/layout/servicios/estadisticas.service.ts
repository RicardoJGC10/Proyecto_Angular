import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  private apiUrl = 'http://143.198.70.194/api/totalsalesandclients/';


  constructor(private http: HttpClient) { }

  getSalesData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
