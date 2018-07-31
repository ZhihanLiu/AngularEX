import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginServiceService} from '../service/login-service.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  flag:number;
  form:FormGroup;
  loginFlag= false;
  
 

  constructor(private fb:FormBuilder,private lis:LoginServiceService , private router: Router) { 
    this.form = this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required]
    }

    )
  }
  login(username:string, password:string) {
   this.lis.login(username, password).subscribe(data => {
    
     if(data == -1) this.loginFlag = true;
     else {
       console.log(data.user);
  
     }
     
    
    });

  }
  

  ngOnInit() {
  }

}
