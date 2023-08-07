import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IResponseProductBranch } from '../../interfaces/product/IProductBranch';

@Injectable({
  providedIn: 'root'
})
export class ProductBrancheService {
 
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}product/branche`;

  public indexProduct(): Observable<IResponseProductBranch> {
    return this.http.get<IResponseProductBranch>(`${this.apiUrl}`);
  }

  public storeProduct(productb: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, productb);
  }

  public showProduct(id: number): Observable<IResponseProductBranch> {
    return this.http.get<IResponseProductBranch>(`${this.apiUrl}/${id}`);
  }

  public updateProduct(id: number, productb: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, productb);
  }

  public destroyProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
