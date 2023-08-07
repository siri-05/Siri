import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';
import { CreateDetailsComponent } from './create-details/create-details.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'create-details',
    component:CreateDetailsComponent
  },
  {
    path:'create-details/:student_ID',
    component:CreateDetailsComponent
  },
  {
    path:'student-details/:student_ID',
    component:StudentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
