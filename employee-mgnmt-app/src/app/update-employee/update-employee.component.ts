import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:number;
  employee:Employee

  constructor(private employeeService:EmployeeService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.employee=new Employee();
    this.id=this.activatedRoute.snapshot.params['id'];
   this.employeeService.getEmployeeById(this.id)
   .subscribe(data => {
     console.log(data)
     this.employee=data;
   },
   error => console.log(error)
   );
  }
updateEmployee(){
  this.employeeService.updateEmployee(this.id,this.employee)
  .subscribe(data => console.log(data), error => console.log(error));
  this.employee=new Employee();
  this.gotoList();
}
gotoList(){
  this.router.navigate(['/employees']);
}
onSubmit(){
  this.updateEmployee();
}
}
