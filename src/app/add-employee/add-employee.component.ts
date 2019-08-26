import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EmployeeinfoService } from '../Services/employeeinfo.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  dialogForm: FormGroup;
  constructor(private fb: FormBuilder,private employeeService: EmployeeinfoService, private router: Router,
    private messageService: MessageService) { }

  ngOnInit() {
    this.dialogForm = this.fb.group({
      name: new FormControl(),
      salary: new FormControl(),
      age: new FormControl()
    })
  }
  addEmployee(dialogForm) {
    console.log('add method called');
    this.employeeService.addEmployee(dialogForm.value)
      .subscribe(data => {
        this.messageService.add({severity:'success', summary:'New Record', detail: 'User Added Successfully' });
        this.router.navigate(['crud']);
        console.log('New Row Added',data);
      });
  }
}
