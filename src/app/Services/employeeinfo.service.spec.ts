import { TestBed } from '@angular/core/testing';
import { EmployeeinfoService } from './employeeinfo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Employee } from '../crud/employee';
import { async } from 'q';
import { HttpClient } from '@angular/common/http';

describe('EmployeeinfoService ', () => {
  let service: EmployeeinfoService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],
      providers: [
        EmployeeinfoService,
        HttpClient,
        HttpTestingController
      ]

    })

    service = TestBed.get(EmployeeinfoService);
    const expectedUrlData = [
      { id: 15355, employee_name: "fff", employee_salary: 123, employee_age: 321 },
      { id: 15356, employee_name: "1", employee_salary: 1, employee_age: 1 },
      { id: 15357, employee_name: "23344", employee_salary: -9, employee_age: 179 }
    ];
    httpMock = TestBed.get(HttpTestingController);
  }));

  // afterEach(async(() => {
  //   httpMock.verify();
  // }));

  // it('should be created', () => {
  //   const service: EmployeeinfoService = TestBed.get(EmployeeinfoService);
  //   expect(service).toBeTruthy();
  // });

  // it('should fail', async(() => {
  //   const promise = new Promise(() => {});
  //   promise.then(() => {
  //       expect(false).toBe(true);
  //   });
  // // }));
  // it("can call promises", done => {
  //   someAsyncThing().then(() => {
  //     done()
  //   });
  // });
  it('Spec Called', () => {
    // let url = "http://dummy.restapiexample.com/api/v1/employees"
    let urlData: Employee[] = [
      { id: 111, employee_name: "hhh", employee_age: 22, employee_salary: 1000 },
      { id: 111, employee_name: "hhh", employee_age: 22, employee_salary: 1000 }
    ];
    expect(service.getAllEmployees()).toBeTruthy();
    service.getAllEmployees().subscribe(getdata => {
      console.log('spec console dta: ',getdata);
      expect(getdata.length).toBe(2);
      expect(getdata).toEqual(urlData);
    });
    const request = httpMock.expectOne(`${service.addEmp}`);
    expect(request.request.method).toBe('POST');
    request.flush(urlData);
  });

  xit('Spec post ',()=>{
    let url ='http://dummy.restapiexample.com/api/v1/create';
    expect(service.basedUrl()).toBeTruthy();
    return url;
  });
  xit('basedUrl method', () => {
    const webUrl = service.basedUrl();
    expect(service.basedUrl).toBeTruthy();
  });
  xit('getAllEmployees method', () => {

  });
});
