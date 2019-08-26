import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ChildtwoComponent } from '../childtwo/childtwo.component';

@Component({
  selector: 'app-childthree',
  templateUrl: './childthree.component.html',
  styleUrls: ['./childthree.component.scss']
})
export class ChildthreeComponent implements OnInit {

  childFormData: FormGroup;
  childname: string = "";
  data: any;
  values: any;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.childFormData = this.fb.group({
      uname: new FormControl(),
      lname: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
    })
    
  }
  onJson() {
    this.values = this.childFormData.value;
    this.data = true;
    console.log('----', this.values)
  }

}
