import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: object;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.user$
    .subscribe(response => {
      this.user = response;
      // this.user = response['name'];
      console.log('response---', response);
    })
  }

}
