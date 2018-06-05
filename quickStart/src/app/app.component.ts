import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'app';
  flag = false;
   call(msg:any){
     alert(msg);
    this. title = "asdasdasdasd";
   }
   change()
{
  this.flag = !this.flag;
}

}
