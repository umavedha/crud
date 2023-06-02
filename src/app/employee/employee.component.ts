import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { EmpserviceService } from '../empservice.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  empData:any
  constructor(public route:ActivatedRoute,public service:EmpserviceService,public router:Router){}
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.service.getEmployeeById(id).subscribe((data)=>this.empData=data)

     // let id = this.route.snapshot.paramMap.get('id);
     
    // console.log(id,'iddd')
    // this.route.params.subscribe(params => {
    //   let id = params['id'];
    //   this.service.getEmployeeById(id).subscribe((data)=>this.empData=data)
    // });
  }
  goBack(){
    this.router.navigate(['/employee'])
  }
  // getById(id:number){
  //   this.service.getEmployeeById(id).subscribe((data)=>{
  //     this.empData=data
      
  //   })}

}
