import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formchild4',
  templateUrl: './formchild4.component.html',
  styleUrls: ['./formchild4.component.scss']
})
export class Formchild4Component implements OnInit {

  // params;
  // queryParams;
  // url;
  // fullUrl;

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  //   this.params = this.route.snapshot.params;
  //   this.queryParams = this.route.snapshot.queryParams;
  //   this.url = this.route.snapshot.url.join('');
  //   this.fullUrl = this.router.url;  
  }
}