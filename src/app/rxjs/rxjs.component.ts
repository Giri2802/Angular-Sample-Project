import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { CarService } from '../carservice.service';
import {delay} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  cars1: Car[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars1=[
      {
          vin:"ee8a89d8",
          brand:"Fiat",
          year:1987,
          color:"Maroon"
      },
      {
          vin:"642b3edc",
          brand:"Renault",
          year:1968,
          color:"White"
      },
      {
          vin:"19ec7580",
          brand:"Renault",
          year:1981,
          color:"Black"
      },
      {
          vin:"39980f30",
          brand:"VW",
          year:1986,
          color:"Red"
      }];
    
      

    this.carService.getCarsSmall().subscribe((cars: Car[]) => {this.cars1 = cars});
    console.log(this.cars1);
    }
  
}
