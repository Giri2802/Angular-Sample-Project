import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

interface City {
  name: string;
  
}
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
selectedCountry:any;
cities=[];
isVisible=false;
drop:boolean=false;
checked: boolean;
cities1:SelectItem[];
viewMode = 'map';
cities2:City[];
selectedCity2: City;
countries=[
  {id:1,name:'france',cities:['paris','mars']},
  {id:2,name:'italy',cities:['vizag','bhog']}
];
subjects:any[]=['Angular','Java','Spring', 'Node','React'];
departments:any[];  
constructor() { }

  ngOnInit() {
    this.cities=this.countries.filter(x=>x.id==1)[0].cities;
this.departments=[
  {id:1, name: 'New York'},
  {id:2, name: 'Rome' },
  {id:3, name: 'London' },
  {id:4, name: 'Istanbul' },
  {id:5, name: 'Paris' }

]
    this.cities1 = [
      {label:'Select City', value:null},
      {label:'New York', value:{id:1, name: 'New York', }},
      {label:'Rome', value:{id:2, name: 'Rome', }},
      {label:'London', value:{id:3, name: 'London', }},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', }},
      {label:'Paris', value:{id:5, name: 'Paris', }}
  ];
  this.cities2 = [
    {name: 'New York1', },
    {name: 'Rome', },
    {name: 'London', },
    {name: 'Istanbul', },
    {name: 'Paris', }
];
  }
  onChange(value){
    this.cities=this.countries.filter(x=>x.id==value)[0].cities;
  }
  
  onSelect(value){

this.drop=true;

  }
  

}
