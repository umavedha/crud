import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  appUrl='http://localhost:4000'
  constructor(private http:HttpClient) { }
  getAllEmployees(){
    return this.http.get(this.appUrl+`/getAllEmployee`)
  }
  getEmployeeById(id:number){
    return this.http.get(this.appUrl+`/getEmployeeById/${id}`)
  }
  addEmployeeData(data:any){
    return this.http.post(this.appUrl+`/addEmployee`,data)
  }
  updateEmployeeById(id:number,data:any){
    return this.http.put(this.appUrl+`/updateEmployee/${id}`,data)
  }
  deleteEmployeeById(id:number){
    return this.http.put(this.appUrl+`/deleteEmployee`,{id:id})
  }
  getAllGender(){
    return this.http.get(this.appUrl+`/getAllGender`)

  }
  getAllBloodGroup(){
    return this.http.get(this.appUrl+`/getAllBloodGroup`)

  }
  

}
