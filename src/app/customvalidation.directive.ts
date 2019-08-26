import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[appCustomvalidation]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: CustomvalidationDirective,
    multi: true
  }]
})
export class CustomvalidationDirective implements Validator {
  @Input() appCustomvalidation: string;

  constructor() { }

  validate(pass: AbstractControl): { [key: string]: any } | null {
    const confpass = pass.parent.get(this.appCustomvalidation);
    if (confpass && confpass.value !== pass.value) {
      return { 'notEqual': true };
    }
    return null;
  }

}
