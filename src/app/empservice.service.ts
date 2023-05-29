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
}
