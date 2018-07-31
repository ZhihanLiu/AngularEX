import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordConfirmDirective, matchValidator } from '../directives/password-confirm.directive';
import { signUpForm } from '../data-model';
import { RegisterService } from '../service/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private fd :signUpForm;
    form:FormGroup;
    alert:string;
   constructor(private fb: FormBuilder, private reg: RegisterService) {
    this.fd = new signUpForm();
    this.form = this.fb.group({
         username:["",Validators.required],
         email:["",Validators.email],
         password:"",
         passwordConfirm:""
    },{
      validators:matchValidator
    });
 }

 signUp(username:string, email:string, password:string, passwordConfirm: string ){
   this.fd.username = username;
   this.fd.email = email;
   this.fd.password = password;
   this.fd.passwordConfirm = passwordConfirm;

   this.reg.signUp(this.fd).subscribe(data => {
  
     console.log(data);
   });
;

 }
  ngOnInit() {
  }

}
