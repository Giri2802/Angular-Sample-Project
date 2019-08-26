import { Component, OnInit } from '@angular/core';
import { EmployeeinfoService } from '../Services/employeeinfo.service';
import { Employee, AddEmployee } from './employee';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  employeeList: Employee[];
  employee: Employee;
  // userId: any = localStorage.getItem('userId');
  display: boolean;
  dialogForm: FormGroup;
  loading = true;
  constructor(private employeeService: EmployeeinfoService, private fb: FormBuilder, private router: Router, private msgService:MessageService) { }

  ngOnInit() {
    this.getAllEmployees();
    this.dialogForm = this.fb.group({
      name: new FormControl(),
      salary: new FormControl(),
      age: new FormControl()
    });
    
    // this.localStorageMethod(this.userId);
    // this.employeeService.getUserById(this.userId).subscribe((data) => {
    //   this.dialogForm.patchValue({ name: data.employee_name, salary: data.employee_salary, age: data.employee_age });
    // },
    // (err: HttpErrorResponse) => {
    //   console.log ('',err.message);
    //   }
    // );
  }
  // localStorageMethod(id: any){
  //   localStorage.removeItem('userId');
  //   localStorage.setItem('userId', id);
  // }

  getAllEmployees() {
    // this.employeeService.getAllEmployees();
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.employeeList = data;
        
      this.loading = false;
      })
  }
  showDialog(id: any) {
    this.display = true;
  //  this.localStorageMethod(id);
   this.router.navigate(['empdetail',id]);
  }

  // updateUser() {
  //   this.employeeService.updateuser(this.dialogForm.value, this.userId)
  //     .subscribe(data => {
  //       this.router.navigate(['crud']);
  //       console.log('UpdateUSer', data);
  //     });
  // }

  deleteEmployee(id: any) {
    let index;
    index = this.employeeList.findIndex(x => x.id === id);
    this.employeeList = this.employeeList.filter((val, i) => i !== index);
    this.employeeService.deleteuser(id).subscribe(data => {
      this.msgService.add({severity:'error', summary:'Delete Message', detail:'Row Deleted Successfully'});
      console.log(data);
      console.log(id);
      this.getAllEmployees();
    });

  }
}
