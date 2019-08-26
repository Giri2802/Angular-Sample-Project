import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageserviceService } from 'src/app/messageservice.service';


@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.scss']
})
export class ChildoneComponent implements OnInit {

  @Input() product;
  @Output() status = new EventEmitter<boolean>();

  enabled:boolean;
  disabled:boolean;
  constructor(private msgservice:MessageserviceService) { }

  sendMessage(){
    this.msgservice.sendMessage("Message is displaying from ChildOne Component! to Parent Component");
  }
  clearMessage(){
    this.msgservice.clearMessages();
  }

  ngOnInit() {
  }

  isActive(active : boolean){
    this.status.emit(active);
    if(active){
      this.enabled = true;
      this.disabled = false;
    }else{
      this.enabled = false;
      this.disabled = true;
      
    }
  }
}
