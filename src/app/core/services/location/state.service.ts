import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IResponseState } from '../../interfaces/location/IState';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}state`;

  public indexStates(): Observable<IResponseState> {
    return this.http.get<IResponseState>(`${this.apiUrl}`);
  }

  public storeStates(state: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, state);
  }

  public showStates(id: number): Observable<IResponseState> {
    return this.http.get<IResponseState>(`${this.apiUrl}/${id}`);
  }

  public updateStates(id: number, state: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, state);
  }

  public destroyStates(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
