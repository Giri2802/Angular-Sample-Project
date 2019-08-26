import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MustMatch } from './validations';
import { ActivatedRoute, Router } from '@angular/router';

interface City {
  name: string,
  code: string,
  label: string
}


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  Reactiveforms: FormGroup;
  /*To print JSON data values */
  data98: boolean;
  /*AutoComplete State values */
  states: string[] = ['AP', 'UP', 'MP', 'kerala'];
  filteredStatesSingle: any[];
  state: string;
  /* Slider Bar */
  val1: number;
  cities1: SelectItem[];
  cities2: City[];
  selectedCity1: City;
  selectedCities1: City[];
  data1: SelectItem[];
  data: FormControl;
  data2: City[];
  formdata: any[] = [];
  checked2: boolean = false;
  submitted = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.cities1 = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
    ];
    this.data1 = [
      { label: 'One ', value: { id: 1, name: 'One', code: 'NY' } },
      { label: 'Two', value: { id: 2, name: 'Two', code: 'RM' } },
      { label: 'Three', value: { id: 3, name: 'Three', code: 'LDN' } },
      { label: 'Four', value: { id: 4, name: 'Four', code: 'IST' } },
      { label: 'Five', value: { id: 5, name: 'Four', code: 'PRS' } }
    ];
  }
  ngOnInit() {
    this.Reactiveforms = this.fb.group({
      uname: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]*$")]),
      lname: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(9)]),
      desc: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(120)]),
      state: new FormControl("", [Validators.required]),
      dob: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("/^[6-9]/d{9}$ /")]),
      city: new FormControl("", [Validators.required,]),
      data: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      ConfPassword: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      dep1: new FormControl("", Validators.required),
      slider: new FormControl("", Validators.required),
      checked2: new FormControl(),
      original: new FormControl(),
      duplicate: new FormControl()
    }, {
        validator: MustMatch('password', 'ConfPassword'),
      });
  }
  filterStateSingle(event) {
    this.filteredStatesSingle = [];
    for (let i = 0; i < this.states.length; i++) {
      let state = this.states[i];
      if (state.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredStatesSingle.push(state);
      }
    }
  }
  checkPassword(pass: FormGroup) {
    const val = pass.controls.password.value;
    const confirmval = pass.controls.ConfPassword.value;
    console.log('cbgbngn', confirmval);

    return val === confirmval ? { notEqual: true } : null;
  }
  addjson() {
    this.Reactiveforms.value;
    this.data98 = true;
  }
  reset() {
    this.Reactiveforms.reset();
  }
  addrow() {
    this.formdata.push(this.Reactiveforms.value);
    console.log(this.formdata);
    alert(this.formdata);
  }
  deleteLastRow(index) {
    this.formdata.splice(index, 1);
  }
  resetTable(index) {
    this.formdata.splice(index);
  }
  handleChange() {
    if (this.checked2 = !this.checked2) {
      this.Reactiveforms.controls.duplicate.setValue(this.Reactiveforms.controls.original.value);
    }
  }

  onSubmit() {
    this.submitted = true;

    // if (this.Reactiveforms.invalid) {
    //   return;
    // }
    alert('Submitted Succesfully' + JSON.stringify(this.Reactiveforms.value));
  }
  /*Routing Concept */
  fchild1() {
    this.router.navigate(['fchild1'], { relativeTo: this.route })
  }
}