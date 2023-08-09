import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleDetailService {

  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}sale/detail`;

  public indexSale(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  public storeSale(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  public showSale(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public updateSale(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  public destroySale(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
