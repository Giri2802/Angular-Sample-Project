import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formchild3',
  templateUrl: './formchild3.component.html',
  styleUrls: ['./formchild3.component.scss']
})
export class Formchild3Component implements OnInit {
  list: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.list = [
      { "id": 1, "name": "angular", "empid": "1", "dept": "ECE" },
      { "id": 2, "name": "Node", "empid": "1", "dept": "CSE" },
      { "id": 3, "name": "spring", "empid": "1", "dept": "EEE" }
    ]
  }
  // onSelect(department){
  //   alert(department);
  //   if(department.name === 'angular'){
  //   this.router.navigate(['/fchild3',department.id]);
  //   }
  // }
  onSelect(department) {
    alert(department.id)
    this.router.navigate(['/template/fchild3', department.id]);
  }
}

// if (department === 'angular') {
//   this.router.navigateByUrl('/template/fchild3', department.id);
// } else if (department === 'Node') {
//   this.router.navigateByUrl('/template/fchild3', department.id);
// } else if (department === 'spring') {
//   this.router.navigateByUrl('/template/fchild3', department.id);
// }