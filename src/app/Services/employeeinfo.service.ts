import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee, AddEmployee } from '../crud/employee';

import { catchError, map } from 'rxjs/operators';
import { Observable, of, timer } from 'rxjs';
// import { WebUrls } from '../Shared/urlFile';
@Injectable({
  providedIn: 'root'
})
export class EmployeeinfoService {

  addEmployeeData: AddEmployee;
  webUrl = 'http://dummy.restapiexample.com/api/v1/';
  webUrl1 = 'http://dummy.restapiexample.com/api/v1/employees';
  addEmp = 'http://dummy.restapiexample.com/api/v1/create';
  url: any;
  constructor(private http: HttpClient,
    //  private urlService: WebUrls
     ) { }
  // dataurl = this.urlService.pathUrl;

  addEmployee(user: AddEmployee) {
    // console.log('Communication URL', JSON.stringify(this.dataurl));
    console.log(user);
    return this.http.post(this.addEmp, user)
      .pipe(
        catchError(err => {
          console.log('catchError', err);
          document.write(JSON.stringify(err.message));
          return of(err);
        })
      );
  }

  getAllEmployees() {
    this.url = this.basedUrl();
   return this.restCallUrl(this.url);
  }


  deleteuser(id: number) {
    return this.http.delete<Employee>(this.webUrl + 'delete' + '/' + id)
      .pipe(
        // map(userResponse => console.log('users: ', userResponse)),
        catchError(err => {
          console.log('catchError', err);
          document.write(JSON.stringify(err.message));
          return of(err);
        })
      );
  }

  getUserById(id: string) {
    return this.http.get<Employee>(this.webUrl + 'employee' + '/' + id)
      .pipe(
        // map(userResponse => console.log('users: ', userResponse)),
        catchError(err => {
          console.log('catchError', err);
          document.write(JSON.stringify(err.message));
          return of(err);
        })
      );
  }

  updateuser(addEmployeeData: AddEmployee, id: any) {
    console.log(id, 'id is');
    return this.http.put<Employee>(this.webUrl + 'update' + '/' + id, addEmployeeData)
      .pipe(
        // map(userResponse => console.log('users: ', userResponse)),
        catchError(err => {
          console.log('catchError', err);
          document.write(JSON.stringify(err.message));
          return of(err);
        })
      );
  }

  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('URL Error', errorResponse.error.message);
    } else {
      console.log('Some Other Error', errorResponse);
    }
  }
  restCallUrl(url) {
    // getAllEmployees(): Observable<Employee[]> {
    console.log('-------', url)
    return this.http.get<Employee[]>(url)
      // .pipe(
      //   // map(userResponse => console.log('users: ', userResponse)),
      //   catchError(err => {
      //     console.log('catchError', err);
      //     document.write(JSON.stringify(err.message));
      //     return of(err);
      //   })
      // );
  }
  basedUrl() {
    return this.webUrl1;
  }

}
