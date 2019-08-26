import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private route:ActivatedRoute) { }

  public departmentId;
  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'))
    this.departmentId=id;
  }

}
