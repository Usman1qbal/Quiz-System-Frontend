import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question';

const apiUrl = environment.url


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${apiUrl}/questions`);
  }
}

