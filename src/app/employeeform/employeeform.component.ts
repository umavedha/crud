import { Component ,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import { EmpserviceService } from '../empservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import {EmployeeData} from '../employee-data'

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent implements OnInit {
empName:string='';
email:string='';
reportingPerson:string='';
genderId:any;
bloodGroupId:any;
update:boolean=false
  empData: any;
  genderData:any;
  bloodData:any;
  empId:any;

constructor(private service:EmpserviceService,
            private router:Router,
            public route:ActivatedRoute){}

ngOnInit(): void {
  let id = this.route.snapshot.params['id'];
  if(id){
    this.getById(id)
    this.update=true
  }
  this.service.getAllGender().subscribe((data)=>this.genderData=data)
  this.service.getAllBloodGroup().subscribe((data)=>this.bloodData=data)

  
}

addEmployee(employeeForm:NgForm){
  console.log(employeeForm,'employee form');
this.service.addEmployeeData(employeeForm).subscribe((data)=>{
  console.log(data);
  this.router.navigate(['/employee'])
  
})
}
getById(id:number){
  this.service.getEmployeeById(id).subscribe((data)=>{
    this.empData=data
 this.empName=this.empData[0].empName
 this.email=this.empData[0].email
 this.reportingPerson=this.empData[0].reportingPerson
 this.genderId=this.empData[0].genderId
 this.bloodGroupId=this.empData[0].bloodGroupId
 this.empId=this.empData[0].id
    
  })}
  updateData(id:number,employeeForm:NgForm){
    console.log(id)
    this.service.updateEmployeeById(id,employeeForm).subscribe((data)=>{
      // console.log(data);
      this.router.navigate(['/employee'])
      
    })
  }
  
}
