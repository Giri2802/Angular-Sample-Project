import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  getJsonData= new Map();
  constructor(private http:HttpClient) { }

  getJson(): Observable<any>{
    return this.http.get('./assets/formArray.json');
    }

}
