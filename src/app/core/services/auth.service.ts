import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}auth`;

  public signIn(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-in`, user);
  }

  public signUp(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-up`, user);
  }

  public forgotPassword(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, user);
  }

  public logout(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, user);
  }

}

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   constructor(private http: HttpClient) {}

//   private apiUrl = `${environment.apiUrl}car`;

//   public indexUsers(): Observable<any> {
//     return this.http.get(`${this.apiUrl}`);
//   }

//   public storeUser(user: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}`, user);
//   }

//   public showUser(id: number): Observable<any> {
//     return this.http.get(`${this.apiUrl}/${id}`);
//   }

//   public updateUser(id: number, user: any): Observable<any> {
//     return this.http.put(`${this.apiUrl}/${id}`, user);
//   }

//   public destroyUser(id: number): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${id}`);
//   }
// }

