import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ViewCategoriesService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}ViewCategory`;

  public indexViewCategory(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  public storeViewCategory(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  public showViewCategory(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public updateViewCategory(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  public destroyViewCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}


/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IViewCategories, IViewCategoriesResponse } from '../../interfaces/views/IViewCategories';

@Injectable({
  providedIn: 'root',
})
export class ViewCategoriesService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}ViewCategory`;

  public indexViewCategory(): Observable<IViewCategoriesResponse> {
    return this.http.get<IViewCategoriesResponse>(`${this.apiUrl}`);
  }

  public storeViewCategory(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  public showViewCategory(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public updateViewCategory(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  public destroyViewCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
*/
