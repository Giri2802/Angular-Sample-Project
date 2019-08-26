import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CarService } from '../carservice.service';
import { FormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Car } from '../Car';
  export interface Car {
   

}
@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent implements OnInit {

  filterTable: FormGroup;
  cars222: Car[];

  cols: any[];
//---------------------------------------------
  cars1: Car[];
  cars2: Car[];
  clonedCars: { [s: string]: Car; } = {};
  // ------------------------------------
  brands: SelectItem[];

  colors: SelectItem[];

  yearFilter: number;

  yearTimeout: any;
  radioval: string;
  currState: boolean;
  constructor(private fb:FormBuilder, private carService: CarService){}
  ngOnInit() {

    this.cars222=[
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
    this.brands = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Ford', value: 'Ford'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];
    this.filterTable = this.fb.group({
      radio : new FormControl(),
      vin : new FormControl(),
      brand : new FormControl(),
      year: new FormControl(),
      color : new FormControl()

    });
    this.radioval = 'Active';
   
    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];

    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');
    }, 250);
  }
  onChange1(eve){
    console.log('-----', eve);
    this.radioval = 'Active';
}
toggleEdit() {
  this.currState = !this.currState;
  this.cars1.map(elem => {
    elem.vin = this.currState
  });
}
}
