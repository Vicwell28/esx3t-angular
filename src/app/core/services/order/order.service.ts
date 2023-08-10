import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IResponseProductBranch } from '../../interfaces/product/IProductBranch';
import { IResponseOrder } from '../../interfaces/order/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

   
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}order`;

  public indexOrder(): Observable<IResponseOrder> {
    return this.http.get<IResponseOrder>(`${this.apiUrl}`);
  }

  public storeOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, order);
  }

  public showOrder(id: number): Observable<IResponseOrder> {
    return this.http.get<IResponseOrder>(`${this.apiUrl}/${id}`);
  }

  public updateOrder(id: number, order: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, order);
  }

  public destroyOrder(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}

