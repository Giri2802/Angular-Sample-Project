import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { ChildthreeComponent } from './childthree/childthree.component';
import { MessageserviceService } from '../messageservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-componentcommunication',
  templateUrl: './componentcommunication.component.html',
  styleUrls: ['./componentcommunication.component.scss']
})
export class ComponentcommunicationComponent implements OnDestroy {

  @Input() xyz: ChildthreeComponent;
  value = this.xyz;
  data: any;
  productStatus: string;
  subscription: Subscription;
  messages:any[]=[];
  constructor( private msgService:MessageserviceService) {
    this.subscription = this.msgService.getMessage().subscribe(message=>{
      if(message){
        this.messages.push(message);
      }else{
        this.messages=[];
      }
    });
   }
   ngOnDestroy(){
     this.subscription.unsubscribe();
   }
  ngOnInit() {
  }
  products = [
    { id: 1, name: 'Mobile' },
    { id: 2, name: 'Laptop' },
    { id: 3, name: 'Desktop' },
    { id: 4, name: 'PC' },
    { id: 5, name: 'SmartPhone' }
  ];
  onStatus(active: boolean) {
    active ? this.productStatus = 'Enabled' : this.productStatus = 'Disabled';
  }
}
