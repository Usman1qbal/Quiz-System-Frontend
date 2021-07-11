import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../models/result';

const apiUrl = environment.url
@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }
  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(`${apiUrl}/results`);
  }
  createResult(body: any): Observable<any[]> {
    return this.http.post<any[]>(`${apiUrl}/results/create`, body);
  }
}

