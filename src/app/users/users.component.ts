import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    { name: 'Giridhar', age: 24 },
    { name: 'Pushkal', age: 12 }
  ];
  getdata: any;
  getdata1: any;
  urldata: Object;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/get').subscribe(data => {
      this.getdata = data;
      console.log('Proxy Data --- : ', data);
    });
    console.log(this.getdata);
    this.getdata1 = this.http.get('/post').subscribe(data => {
      console.log('Proxy Data2 --- : ', data);
    });
    console.log(this.getdata1);
    this.http.get('/localurl').subscribe(data =>{
      this.urldata = data;
      console.log("url data: ",data);
    })

  }

}
