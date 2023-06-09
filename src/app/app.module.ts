import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpserviceService } from './empservice.service';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    CompanyComponent,
    EmployeeComponent,
    DashboardComponent,
    EmployeeformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
