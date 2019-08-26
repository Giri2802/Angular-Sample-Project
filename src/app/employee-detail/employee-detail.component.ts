import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../crud/employee';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EmployeeinfoService } from '../Services/employeeinfo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee: Employee[];
  display: boolean;
  dialogForm: FormGroup;
  // userId: any = localStorage.getItem('userId');
  getID: string;
  constructor(private employeeService: EmployeeinfoService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder,
    private messageService: MessageService) { }

  ngOnInit() {
    this.display = true;
    this.dialogForm = this.fb.group({
      name: new FormControl(),
      salary: new FormControl(),
      age: new FormControl()
    });
    this.getID = this.route.snapshot.paramMap.get('id');
    this.employeeService.getUserById(this.getID).subscribe((data) => {
      console.log(data, this.getID);
      this.dialogForm.patchValue({ name: data.employee_name, salary: data.employee_salary, age: data.employee_age });
    });
  }

  updateUser() {
    this.employeeService.updateuser(this.dialogForm.value, this.getID)
      .subscribe(data => {
        this.messageService.add({ severity: 'success', summary: 'Row Updated', detail: 'Row Updated Successfuly' });
        this.router.navigate(['crud']);
        console.log('UpdateUSer', data);
      });

  }

}
