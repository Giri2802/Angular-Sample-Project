import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {

  
  today= new Date();
  jstoday = '';
  transform(value: any, args: any[]): any {
    return null;
  }
  constructor() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '-8000');
  }
}

