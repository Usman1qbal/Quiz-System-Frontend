import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestFormComponent } from './components/test-form/test-form.component';
import { ResultsComponent } from './pages/results/results.component';
import { TestComponent } from './pages/test/test.component';
import { TestsComponent } from './pages/tests/tests.component';

const routes: Routes = [
  { path: '', component: ResultsComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'create', component: TestFormComponent },
  { path: 'test/:id', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
