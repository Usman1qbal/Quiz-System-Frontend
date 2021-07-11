import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/models/result';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results$: Observable<Result[]>;
  action: string = null;
  keysObj: object = { id: 'id', title: 'title', score: 'score', duration: 'duration' }
  headers: Array<string> = ['Result ID', 'Title', 'Percentage Score', 'Duration']
  constructor(private resultService: ResultsService) { }

  ngOnInit(): void {
    this.results$ = this.resultService.getResults()
  }

}

