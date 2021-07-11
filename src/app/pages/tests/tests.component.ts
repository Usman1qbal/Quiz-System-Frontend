import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestListItem } from 'src/app/models/test';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tests$: Observable<TestListItem[]>;
  action: string = 'start';
  keysObj: object = { title: 'title' }
  headers: Array<string> = ['Name']

  constructor(private testService: TestsService) { }

  ngOnInit(): void {
    this.tests$ = this.testService.getTests()
  }

}

