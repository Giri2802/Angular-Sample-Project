import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user:object;
  constructor( private userService:UserServiceService) { }

  ngOnInit() {
  }
  onClick(user) {
    this.userService.sendUser(user);
  }
}
