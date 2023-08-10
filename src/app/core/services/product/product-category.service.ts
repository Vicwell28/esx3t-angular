import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IResponseProductCategory } from '../../interfaces/product/IProductCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}product/category`;

  public indexProduct(): Observable<IResponseProductCategory> {
    return this.http.get<IResponseProductCategory>(`${this.apiUrl}`);
  }

  public storeProduct(productc: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, productc);
  }

  public showProduct(id: number): Observable<IResponseProductCategory> {
    return this.http.get<IResponseProductCategory>(`${this.apiUrl}/${id}`);
  }

  public updateProduct(id: number, productc: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, productc);
  }

  public destroyProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
