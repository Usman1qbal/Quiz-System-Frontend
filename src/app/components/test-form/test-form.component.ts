import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  questions$: Observable<Question[]>
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private questionSerice: QuestionsService,
    private testService: TestsService,
    private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: new FormControl(null, Validators.required),
      questionIds: this.fb.array([])
    });
    this.questions$ = this.questionSerice.getQuestions()
  }

  onChange(id: number, e: any) {
    const questionsArray = <FormArray>this.myForm.controls.questionIds;
    if (e.target.checked) {
      questionsArray.push(new FormControl(id));
    } else {
      let index = questionsArray.controls.findIndex(x => x.value == id)
      questionsArray.removeAt(index);
    }
    if (this.myForm.controls.questionIds.value.length > 4 && e.target.checked) {
      alert('Please select only 4 questions')
      let index = questionsArray.controls.findIndex(x => x.value == id)
      questionsArray.removeAt(index);
      e.target.checked = false
    }

  }

  registerUser() {
    if (this.myForm.valid && this.myForm.value.questionIds.length === 4) {
      this.testService.createTest(this.myForm.value).pipe().subscribe(res => {
        this.router.navigate(['/tests'])
      })
    }
    else {
      alert('Please fill form correctly')

    }
  }

}

