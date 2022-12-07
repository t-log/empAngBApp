import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  constructor(private api:ApiService){}
  empCode=""
  searchData:any=[]
  readValue=()=>{
    let data = {"empCode":this.empCode}
    console.log(data)
    this.api.searchEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("No result")
        }
        else{
          this.searchData=response
        }
      }
    )
  }
  
}
