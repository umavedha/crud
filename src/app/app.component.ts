import { Component,OnInit } from '@angular/core';
import { EmpserviceService } from './empservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud';
  employeeList: any;
  constructor(private service:EmpserviceService){}
  ngOnInit(): void {
    this.getAllEmployees()
  }
  getAllEmployees(){
    this.service.getAllEmployees().subscribe((data)=>{
      return this.employeeList=data
    })
  }

}
