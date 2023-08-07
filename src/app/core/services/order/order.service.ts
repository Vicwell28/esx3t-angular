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

  public indexProduct(): Observable<IResponseOrder> {
    return this.http.get<IResponseOrder>(`${this.apiUrl}`);
  }

  public storeProduct(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, order);
  }

  public showProduct(id: number): Observable<IResponseOrder> {
    return this.http.get<IResponseOrder>(`${this.apiUrl}/${id}`);
  }

  public updateProduct(id: number, order: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, order);
  }

  public destroyProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}

