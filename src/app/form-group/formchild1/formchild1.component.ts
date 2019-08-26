import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formchild1',
  templateUrl: './formchild1.component.html',
  styleUrls: ['./formchild1.component.scss']
})
export class Formchild1Component implements OnInit {

  name: any = 20;
  string1: any = 'Giridhar';

  siteurl = window.location.href;

  username:string="Pawan Kalyan";
  message:string=`Demi God ${this.username}`;
  constructor() { }
  name1 = "click button to see a magic";
  ngOnInit() {
  }
  onClick() {
    this.name1 = "this is event binding";
  }

}
