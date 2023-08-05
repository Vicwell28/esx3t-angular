import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { IResponseRole } from '../../interfaces/user/IRole';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}role`;

  public indexRole(): Observable<IResponseRole> {
    return this.http.get<IResponseRole>(`${this.apiUrl}`);
  }

  public storeRole(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  public showRole(id: number): Observable<IResponseRole> {
    return this.http.get<IResponseRole>(`${this.apiUrl}/${id}`);
  }

  public updateRole(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  public destroyRole(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
