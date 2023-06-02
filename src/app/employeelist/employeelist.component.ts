import { Component ,Input,OnInit} from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  // @Input() public employeeData:any;
  employeeList:any;
  empData:any;
  constructor(public service:EmpserviceService,public router:Router){}
  ngOnInit(): void {
    this.getAllEmployees()
  }
  getAllEmployees(){
    this.service.getAllEmployees().subscribe((data)=>{
      return this.employeeList=data
    })
  }
  getById(id:number){
    this.router.navigate(['/editEmployee',id])

  }
  addEmployee(){
    this.router.navigate(['/addEmployee'])
  }
  deleteData(id:number){
    this.service.deleteEmployeeById(id).subscribe((data)=>{
      console.log(data);
      this.getAllEmployees()
      
    })
  }
 



}
