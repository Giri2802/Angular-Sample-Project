import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JsonServiceService } from '../Services/json-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  AddressandContactsValueArray: any[];
  address: any[];
  jsonData: any;
  data1: any;
  constructor(private http: HttpClient, private jsonService: JsonServiceService) { }

  ngOnInit() {
    let index;
    this.jsonService.getJson().subscribe((data: any) => {
      console.log('-------', data);
      this.jsonData = data;
      this.data1 = this.jsonData[0].addressAndContacts;
      console.log('Data Getted',this.data1);
    },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      });
  }
}
