import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Test, TestForm, TestListItem } from '../models/test';

const apiUrl = environment.url
@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(private http: HttpClient) { }
  createTest(body: TestForm): Observable<TestForm[]> {
    return this.http.post<TestForm[]>(`${apiUrl}/tests/add`, body);
  }
  getTests(): Observable<TestListItem[]> {
    return this.http.get<TestListItem[]>(`${apiUrl}/tests/all`);
  }
  getTest(id: number): Observable<Test> {
    return this.http.get<Test>(`${apiUrl}/tests/${id}`);
  }
}

