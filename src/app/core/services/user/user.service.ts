import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}user`;

  public indexUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  public storeUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  public showUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  public destroyUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
