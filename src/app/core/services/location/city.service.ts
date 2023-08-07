import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IResponseCity } from '../../interfaces/location/ICity';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}city`;

  public indexCities(): Observable<IResponseCity> {
    return this.http.get<IResponseCity>(`${this.apiUrl}`);
  }

}
