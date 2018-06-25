import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

FormBuilder
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form:FormGroup;
  ww =  0;
  ss:any =123;
  
constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    firstname :['',Validators.required],
    lastname:''
  });
}
  styleHead = {color: 'blue',
  'font-family': 'verdana',
  'font-size': '150%'};
  search = "";
  title = 'app';
  flag = false;
  t = true;
  books = [{"id":28,"Title":"Sweden"}, {"id":56,"Title":"USA"}, {"id":89,"Title":"England"}];
  style = {color: 'blue', 'font-size': '24px', 'font-weight': 'bold'};
  classStyle = {
    style2:true,
    style1:false
  }

   call(msg:any){
     alert(msg);
    this. title = "asdasdasdasd";
   }
   change()
{
  this.flag = !this.flag;
}
  see(form: any) {
    console.log(this.form);
  }



  countChange(index){
    console.log(index);
    this.ww = index;
  }

}

