import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChildthreeComponent } from '../childthree/childthree.component';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.scss']
})
export class ChildtwoComponent implements OnInit {
 
  @ViewChild(ChildthreeComponent,{static:true})child:ChildthreeComponent;

  data98: boolean;
  formValues: FormArray;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  // formControlsData(): FormGroup{
  //   return this.childFormData.group({
  //     uname: '',
  //     lname: '',
  //     phone: '',
  //     email: ''
  //   });
  // }
  // addFormData(): void{
  //   this.formValues = this.childFormData.get('formValues') as FormArray;
  //   this.formValues.push(this.formControlsData());
  // }

onClick(){
  this.child.childname="This is the Info from Child Two COmponent using @ViewChild Communication";
}
}