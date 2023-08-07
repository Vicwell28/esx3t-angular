import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IResponseProduct } from '../../interfaces/product/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}product`;

  public indexProduct(): Observable<IResponseProduct> {
    return this.http.get<IResponseProduct>(`${this.apiUrl}`);
  }

  public storeProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, product);
  }

  public showProduct(id: number): Observable<IResponseProduct> {
    return this.http.get<IResponseProduct>(`${this.apiUrl}/${id}`);
  }

  public updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  public destroyProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
