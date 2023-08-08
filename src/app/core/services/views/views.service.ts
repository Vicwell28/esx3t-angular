import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IStoreView } from '../../interfaces/views/IView';

@Injectable({
  providedIn: 'root',
})
export class ViewsService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}View`;

  public indexView(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  public storeView(user: IStoreView): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  public showView(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public updateView(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  public destroyView(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
