import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employye',
  templateUrl: './create-employye.component.html',
  styleUrls: ['./create-employye.component.css']
})
export class CreateEmployyeComponent implements OnInit {

  employee: Employee=new Employee();
  submitted=false;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }
  newEmployee():void{
    this.submitted=false;
    this.employee=new Employee();
  }
save(){
  this.employeeService.createEmployee(this.employee).subscribe(data =>console.log(data),error => console.log(error));
  this.employee=new Employee();
  this.gotoList();
}
gotoList(){
  this.router.navigate(['/employees']);
}
onSubmit(){
  this.submitted=true;
  this.save();
}
}
