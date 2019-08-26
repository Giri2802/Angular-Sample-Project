import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormBuilder, FormArray, FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Drop {
  name: string;
  code: string;
}

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {
  username1="dhbvks";
  id='28';
  workexperience: FormArray;
  arrayForm: FormGroup;
  cities: Drop[];
  model: any = {};
  dropvales: SelectItem[];
  dropvalues: any[] = [];
  selectedCities: Drop[];
  skills: any[] = [];
  gender: string;
  checked2: boolean = false;
  original: any;
  duplicate: any;
  uname1:string='';
  tabledata: any[] = [];
  queryParams = [];
 
  getIndex(p){
    this.router.navigate(['/fchild4', p.id]);
  }
rouval : any= [
  {id:1,name:'abc'}
]
  constructor(private fb: FormBuilder,private route: ActivatedRoute,private router: Router) {
    this.skills = [
      { label: "Angular", value: "Angular" },
      { label: "CSS", value: "CSS" },
      { label: "HTML", value: "HTML" },
      { label: "Java", value: "Java" },
      { label: ".Net", value: ".Net" }
    ],
      this.dropvalues = [
        { label: "Select City", value: "" },
        { label: "Vizag", value: "Vizag" },
        { label: "Guntur", value: "Guntur" },
        { label: "Srikakulam", value: "Srikakulam" },
        { label: "Vizainagaram", value: "Vizainagaram" },
        { label: "Vijaywada", value: "Vijaywada" }
      ],
      this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
      ];
  }

  checkPassword(pass: FormGroup) {
    const val = pass.controls.password.value;
    const confirmval = pass.controls.cpassword.value;
    console.log('cbgbngn', confirmval);

 return val === confirmval ? { 'notEqual' : true } : null;
    
  }

  ngOnInit() {
  
    this.arrayForm = this.fb.group({
      workexperience: this.fb.array([this.createExperience()])
    });
  }

  createExperience() {
    return this.fb.group({
      company: [''],
      experience: [''],
      designation: [''],
      domain: ['']
    })
  }
  addExperience() {
    this.workexperience = this.arrayForm.get('workexperience') as FormArray;
    this.workexperience.push(this.createExperience());
  }
  handleChange(templateForm) {
    this.checked2 = true;
    templateForm.duplicate.value.setValue(templateForm.original.values);
  }

  addRow(templateForm) {
    console.log(this.selectedCities);
    this.tabledata.push(templateForm.value);
  }
  addEmptyRow(templateForm){
    this.tabledata.push(templateForm);
  }

  reset(templateForm) {
    templateForm.reset();
  }
  onSubmit() {

    alert(JSON.stringify(this.model));
  }

}
