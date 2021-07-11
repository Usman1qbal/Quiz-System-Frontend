import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Test } from 'src/app/models/test';
import { ResultsService } from 'src/app/services/results.service';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test: Test
  form: FormGroup;
  sec: number = 90
  time = null;
  clock: string;
  constructor(
    private testService: TestsService,
    private resultService: ResultsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.testService.getTest(this.route.snapshot.params.id).pipe().subscribe(res => {
      this.test = res;
      this.test.questions.forEach((q, index) => {
        q['formControleName'] = `question${index}`
      })
      this.form = this.fb.group({});
      this.test.questions.forEach(question => {
        this.form.addControl(question['formControleName'], this.fb.control(null, Validators.required));
      })
      this.time = setInterval(() => {
        this.myTimer();
      }, 1000)
    })

  }

  submitTest() {
    const answers = []
    this.test.questions.forEach((q, i) => {
      answers.push({ questionId: q.id, answer: this.form.value[`question${i}`] })
    })
    if (this.time) {
      clearInterval(this.time)
    }
    this.resultService.createResult({ ...this.test, answers: answers, duration: this.sec === 0 ? '90 sec' : `${this.sec} sec` }).pipe().subscribe(res => {
      this.router.navigate(['/'])
    })
  }

  myTimer() {
    this.clock = `${this.sec}`;
    this.sec = this.sec - 1;
    if (this.sec == -1) {
      clearInterval(this.time);
      alert("Time out!! :(");
      this.submitTest()
    }
  }

}


