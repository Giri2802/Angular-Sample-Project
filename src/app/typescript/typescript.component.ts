import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../../../../angular-project/src/app/cmspage/contact';
import { FormGroup, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

  dynamicForm: FormGroup;
  dropValue: any
  jsondata: any;
  firstJsonArrayData: any;
  jsondata1: any;
  jsonvalue: any;
  jsondata2: any;
  jsondata3: any;
  jsondata5: any;

  constructor(private http:HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.dynamicForm =this.fb.group({
      dropValue : ['']
    });
    
    of(this.getDropValues()).subscribe(orders => {
      this.dropValue = orders;
      this.dynamicForm.controls.orders.patchValue(this.dropValue[0].id);
      console.log('DROP VALUE',this.dropValue);
    });

    this.greet();
    this.http.get('/assets/rough.json').subscribe((res : any[])=>{
      this.jsondata = res[0];
      console.log('JSON Data',this.jsondata);
      this.firstJsonArrayData = this.jsondata.data.cont.region.country.game.games.market.Annonymus.event.mrg;
      console.log('Reading Object value from JSON',this.firstJsonArrayData);
    });
    
      this.http.get('/assets/sample.json').subscribe((res : any)=>{
      this.jsonvalue = res[0].problems;
      this.jsondata1 = res[0].problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0].associatedDrug;
      console.log('sample json', this.jsondata1);
      this.jsondata2 =this.jsonvalue.push('Giridhar');
      console.log('Push', this.jsondata2);
      console.log('after Push', this.jsonvalue);
      // this.jsondata3 = this.jsonvalue.pop();
      // console.log('Popped Element', this.jsondata3);
      console.log('J=join using JSON: ',this.jsonvalue.concat(this.jsondata));
      this.jsondata5 = this.jsonvalue.join('Giridhar:987');
      console.log('-----------',this.jsondata5);
      console.log('join : ---', this.jsonvalue.join('Giridhar:987'));
      console.log('Reverse json', this.jsonvalue.reverse());
      console.log('Shift--', this.jsonvalue.shift());
      console.log('slice--',this.jsonvalue.slice(1,2));
      console.log('sort--', this.jsonvalue.sort());
    });

    
  
  }

  getDropValues(){
    return [
      { id: 1, name: "College"},
      { id: 2, name: "School"},
      { id: 3, name: "Working"}
    ];
  }
  greet() {
    let user = "Giridhar";
    var h = "Hello " + user;
    console.log(h);
    var a: number = 10;
    console.log(a);
    var b: string = "Hello";
    console.log(b);
    var c: boolean = true;
    console.log(c);
    var d: number[] = [66, 22, 44];
    console.log(d);
    var e: object = { x: 10, y: 20 };
    console.log(e);
    var n: any = 100;
    console.log(n);
  }
}












class Employee {

  name: string = 'Giridhar';
  age: number = 24;

  condition() {
    if (name >= 25) {
      return 'Ellgible';
    } else {
      return 'Not Elgible';
    }
  }
}
var s = new Employee();
console.log('---------------------');
console.log(s.name);
console.log(s.age);
console.log(s.condition());
console.log('---------------------');


class Employee1 {

  name: string;
  age: number;
  constructor() {
    this.name = 'Giridhar';
    this.age = 26;
  }
  condition() {
    if (name <= 25) {
      return 'Ellgible';
    } else {
      return 'Not Elgible';
    }
  }
}
var s = new Employee1();
console.log('---------------------');
console.log(s.name);
console.log(s.age);
console.log(s.condition());
console.log('---------------------');


//Inheritence Concept

class Person {
  name: string;
  age: number;
  constructor(a: string, b: number) {
    this.name = a;
    this.age = b;
  }
}
class Student extends Person {
  studentid: number;
  marks: number;
  constructor(p: string, q: number, r: number, s: number) {
    super(p, q);
    this.studentid = r;
    this.marks = s;
  }
}
console.log('Inheritence---------');
var p = new Person('Lakshmi', 20);
console.log(p.name);
console.log(p.age);
console.log('--------------');
var t = new Student('Pushkal', 22, 202, 75);
console.log(t.name);
console.log(t.age);
console.log(t.studentid);
console.log(t.marks);
console.log('Inheritence---------Finished');

interface IStudent {
  firstName: string;
  lastName: string;
  getFullName(): String;
}
class Student1 implements IStudent {
  firstName: string;
  lastName: string
  getFullName(): string {
    return this.firstName + "" + this.lastName;
  }
}
var ss = new Student1();
ss.firstName = 'Prudhvi ';
ss.lastName = 'Sai';
console.log('Interface-----------')
console.log(ss.getFullName());


class Sample {
  add = (a: number, b: number): number => {
    var c = a + b;
    return c;
  };
}
var add = new Sample();
console.log('Arrow Function------');
console.log(add.add(10, 30));

var south = ["Hyderabad", "Chennai", "Bangalore", "Madhurai", "Kochi", "Kodaikanal"];
var [city1, city2, city3, ...cities] = south;
console.log('Destructuring ---------');
console.log(city1);
console.log(city2);
console.log(city3);
console.log(cities);

//Multiline Strings-----
var mul = `hello
this 
is
giridhar`;
console.log(mul);
var s1 = 'This is';
var s2 = `${s1} Beautiful`;
console.log(s2);

// Reading Elements from Array in different ways

var cities: string[] = ["Vizag", "Hyd", "Vijayawada", "Guntur", "Chirala", "Chennai"];
console.log('-----For Loop-----');
for (var i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
console.log('-----Foreach Loop-----');
cities.forEach((city) => {
  console.log(city);
})
console.log('-----Forof Loop-----');
for (var city of cities) {
  console.log(city);
}
console.log('-----Forin Loop-----');
for (let i in cities) {
  console.log(i + ',' + cities[i]);
}

enum coursename {
  Java, Blockchain, Angular
}
class Student2 {
  studentname: string;
  age: number;
  course: coursename;
}
var x = new Student2();
x.studentname = "Giridhar";
x.age = 24;
x.course = coursename.Blockchain;
console.log(x.studentname);
console.log(x.age);
console.log(x.course);
console.log(coursename[x.course]);

//Namespaces--------

namespace College {
  export class Student {
    studentid: number;
    studentname: string;
    constructor(a: number, b: string) {
      this.studentid = a;
      this.studentname = b;
    }
  }
  export var courselist: string[] = [
    ".NET", "JAVA", "ANgular"
  ]
}
console.log(College.courselist);
console.log(new College.Student(101, 'Giridhar'));

//Arrays-----------------------------------------

var arr = [20, 5, 9, 6, 44, 66, 75];
console.log(arr[2]);
console.log(arr[1]);
console.log('------------------')
var arr1: number[] = new Array(5);
for (var i = 0; i < arr1.length; i++) {
  arr1[i] = i * 3;
  console.log(arr1[i]);
}

console.log('------------------')
var arr2 = ["Giridhar", "Pushkal", "Prudvi", "Lakshmi"];
for (var i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
console.log('------------------')
console.log(arr1.concat(arr));
console.log('------------------')

function isBigEnough(element, indexe, array) {
  return (element >= 10);
}
var out = arr.filter(isBigEnough);
console.log(out);

console.log('-----------------');
let num = [2, 5, 9, 12, 66];
num.forEach(function (value) {
  console.log('forEach : ', value);
});

console.log('-----------------');
console.log('indexOF : ', arr.indexOf(9));

console.log('join()-----------------');
console.log(arr2.join(' + '));
console.log(arr2.join(', '));
console.log(arr2.join('.'));

console.log('-----------------');
console.log(arr.lastIndexOf(75));

console.log('-----------------');
var arr3 = [
  { key: 1, value: 'Giridhar' },
  { key: 2, value: 'Pushkal' },
  { key: 3, value: 'Prudhvi' }
]
var formatArray = arr3.map(obj => {
  var objarray = {};
  objarray[obj.key] = obj.value;
  console.log(objarray);
});

console.log('.map using sqrt-----------------');
var numbers=[4,9,75,66];
var root = numbers.map(Math.sqrt);
console.log(root);

console.log('-----------------');
