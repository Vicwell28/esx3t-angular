import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IResponseIViewCategory } from '../../interfaces/views/IViewCategory';

@Injectable({
  providedIn: 'root',
})
export class ViewCategoriesService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}ViewCategory`;

  public indexViewCategory(): Observable<IResponseIViewCategory> {
    return this.http.get<IResponseIViewCategory>(`${this.apiUrl}`);
  }

  public storeViewCategory(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  public showViewCategory(id: number): Observable<IResponseIViewCategory> {
    return this.http.get<IResponseIViewCategory>(`${this.apiUrl}/${id}`);
  }

  public updateViewCategory(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  public destroyViewCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
