import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const matchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  
  const passwordConfirm = control.get('passwordConfirm');

  return password && passwordConfirm && password.value === passwordConfirm.value ? { 'match': true } : null;
};

@Directive({
  selector: '[appPasswordConfirm]', 
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordConfirmDirective, multi: true}]
})
export class PasswordConfirmDirective  implements Validator{
 
validate(c:AbstractControl){
  return matchValidator(c);
}

}
