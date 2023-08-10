import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IResponseOrder } from '../../interfaces/order/IOrder';
import { IResponseOrderDetail } from '../../interfaces/order/IOrderDetail';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}order/detail`;

  public indexOrderD(): Observable<IResponseOrderDetail> {
    return this.http.get<IResponseOrderDetail>(`${this.apiUrl}`);
  }

  public storeOrderD(orderDet: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, orderDet);
  }

  public showOrderD(id: number): Observable<IResponseOrderDetail> {
    return this.http.get<IResponseOrderDetail>(`${this.apiUrl}/${id}`);
  }

  public updateOrderD(id: number, orderDet: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, orderDet);
  }

  public destroyOrderD(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
