import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myPipe'
})
export class MyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   
     var output = "";
   if(args != "" && args != null) { 
      var temp = value;
     
      
    return  temp.filter( input => input.Title.indexOf(args) > -1);
    
    }
    else{
    switch (value) {
      case "USA":
        output = "US";
       break;
    
      default:
      output = value;
        break;
    }
    return output;
  }
  }

}