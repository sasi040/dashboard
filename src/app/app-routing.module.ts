import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { TestCaseComponent } from './test-case/test-case.component';


const routes: Routes = [
  { path: '', component: ApplicationListComponent},
  { path: 'application/:appId', component: ApplicationDetailsComponent},
  { path: 'execution/:executionId/:testCaseStatus', component: TestCaseComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
