import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IResponseBranch } from '../../interfaces/branche/IBranch';

@Injectable({
  providedIn: 'root'
})
export class BrancheService {

  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}branch`;

  public indexBranches(): Observable<IResponseBranch> {
    return this.http.get<IResponseBranch>(`${this.apiUrl}`);
  }

  public storeBranches(branch: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, branch);
  }

  public showBranches(id: number): Observable<IResponseBranch> {
    return this.http.get<IResponseBranch>(`${this.apiUrl}/${id}`);
  }

  public updateBranches(id: number, branch: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, branch);
  }

  public destroyBranches(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
