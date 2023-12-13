import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { SignInSignUp } from '../interfaces/auth/SingInAndSingUp';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}`;

  public signIn(user: any): Observable<SignInSignUp> {
    return this.http.post<SignInSignUp>(`${this.apiUrl}/login`, user);
  }

  public signUp(user: any): Observable<SignInSignUp> {
    return this.http.post<SignInSignUp>(`${this.apiUrl}/user`, user);
  }

  public forgotPassword(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, user);
  }

  public logout(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, user);
  }

}
