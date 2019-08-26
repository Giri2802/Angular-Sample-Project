import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';
import { from } from 'rxjs';
// import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCarsMedium() {
    throw new Error("Method not implemented.");
  }
url= 'app/cars-large.json';
  constructor(private http: HttpClient) { }
  getCarsSmall() {
    return this.http.get(this.url);
                // .toPromise()
                // .then(res => <Car[]> res.data)
                // .then(data => { return data; });
}
}