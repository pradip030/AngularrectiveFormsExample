import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [{path:'employee', component: EmployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
