import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
empCode=""
empName=""
designation=""
salary=""
companyName=""
mobile=""
username=""
password=""

  constructor(private api:ApiService){}

  readEmployeeValue = ()=>{
    let employeeData:any={"empCode":this.empCode,"empName":this.empName,"designation":this.designation,
    "salary":this.salary,"companyName":this.companyName,"mobile":this.mobile,
    "username":this.username,"password":this.password}
    console.log(employeeData)
    this.api.addEmployee(employeeData).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Employee Added Successfully")
        }
        else{
          alert("Something wrong happened!")
        }
      }
    )

  }
}
