import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProxyData } from './proxyModel';

@Component({
  selector: 'app-proxycrud',
  templateUrl: './proxycrud.component.html',
  styleUrls: ['./proxycrud.component.scss']
})
export class ProxycrudComponent implements OnInit {
  proxyGetData: Object;
  proxyForm: FormGroup;
  loading = true;
  constructor(private http: HttpClient, private fb: FormBuilder,
    private proxyModel: ProxyData) { }

  ngOnInit() {
    this.getdeatils();
    this.proxyForm = this.fb.group({
      id: [],
      name: [],
      gender: []
    });
  }

  updateData(record: any) {

    console.log('selectede record', record);
    // this.proxyForm.controls.id.patchValue(record.id);
    // this.proxyForm.controls.name.setValue(record.name);
    // this.proxyForm.get('gender').setValue(record.gender);
    this.proxyForm.patchValue(record);
  }

  getdeatils() {
    this.http.get('/getalldata').subscribe(data => {
      this.proxyGetData = data;
      this.loading = false;
      console.log('Fetched Data : ', data);
    })
  }

  updateRow(proxyForm) {
    console.log('updated row', proxyForm.value);
    const record = proxyForm.value;
    const id = record.id;
    this.http.put('/updatedata/' + id, record, { responseType: 'text' }).subscribe(res => {
      console.log('Update response : ', res);
      this.getdeatils();
      this.formReset();
    });
  }

  delete(id: any) {
    console.log('method call id check', id);
    this.http.delete('/deletedata/' + id, { responseType: 'text' }).subscribe(res => {
      console.log('delete response : ', res);
      this.getdeatils();
    });
  }

  addData(proxyForm) {
    console.log('Add Data : ', proxyForm.value);
    this.http.post('/adddata', proxyForm.value, { responseType: 'text' }).subscribe(res => {
      console.log('row Added', res);
      this.getdeatils();
      this.formReset();
    });
  }

  formReset() {
    this.proxyForm.reset();
  }
}
