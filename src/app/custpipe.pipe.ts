import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipe',
  pure: false
})
export class CustpipePipe implements PipeTransform {

  transform(value: any, args: any): any {
    console.log('pure Pipe');
    return value * args;
  }

}
