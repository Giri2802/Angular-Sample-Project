import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-pipessample',
  templateUrl: './pipessample.component.html',
  styleUrls: ['./pipessample.component.scss']
})
export class PipessampleComponent implements OnInit {

  data = 'giridhar';
  data1 = 'GIRIDHAR';
  
  jsondata = [
    {
      vin: "ee8a89d8",
      brand: "Fiat",
      year: 1987,
      color: "Maroon"
    },
    {
      vin: "642b3edc",
      brand: "Renault",
      year: 1968,
      color: "White"
    },
    {
      vin: "19ec7580",
      brand: "Renault",
      year: 1981,
      color: "Black"
    },
    {
      vin: "39980f30",
      brand: "VW",
      year: 1986,
      color: "Red"
    }];
  today = new Date;
  pi: number = 3.14;
  num: number = 2.71828;
  marks: number = 75;
  marks1: number = 12.2546834;
  str: string = 'abcdefghijklmnopqrstuvwxyz';
  object: { [key: number]: string } = { 1: 'Giridhar', 2: 'Lakshmi' };
  map = new Map([[1, 'Sri'], [2, 'Krishna']]);

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format() { 
    return this.toggle ? 'shortDate' : 'fullDate'; 
  }
  
  toggleFormat() {
     this.toggle = !this.toggle; 
    }

    
  jstoday = '';
  constructor() { 
    
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '-300');
  }

  ngOnInit() {
  }

}
