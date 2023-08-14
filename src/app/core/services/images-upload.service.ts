import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesUploadService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}`;

  public upload(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}upload`, user);
  }
}
