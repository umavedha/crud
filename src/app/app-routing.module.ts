import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';

const routes: Routes = [
  {
    path:'company',
   component:CompanyComponent},
   {
    path:'employee/:id',
    component:EmployeeComponent
   },
   {
    path:'employee',
    component:EmployeelistComponent
   },
   {
    path:'editEmployee/:id',
    component:EmployeeformComponent
   },
   {
    path:'addEmployee',
    component:EmployeeformComponent
   },
   
   {
    path:'**',
    component:DashboardComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
