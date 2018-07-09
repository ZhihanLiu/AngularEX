import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordConfirmDirective, matchValidator } from '../directives/password-confirm.directive';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   private form:FormGroup;
  constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
           username:["",Validators.required],
           email:["",Validators.email],
           password:"",
           passwordConfirm:""
      },{
        validators:matchValidator
      });
   }

  ngOnInit() {
  }

}
