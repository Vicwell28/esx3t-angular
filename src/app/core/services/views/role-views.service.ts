import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IResponseViewRole } from '../../interfaces/views/IViewRole';

@Injectable({
  providedIn: 'root',
})
export class RoleViewsService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}RoleView`;

  public indexRoleView(): Observable<IResponseViewRole> {
    return this.http.get<IResponseViewRole>(`${this.apiUrl}`);
  }

  public storeRoleView(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  public showRoleView(id: number): Observable<IResponseViewRole> {
    return this.http.get<IResponseViewRole>(`${this.apiUrl}/${id}`);
  }

  public updateRoleView(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  public destroyRoleView(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}