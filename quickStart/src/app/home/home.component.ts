import { Component ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent  {

  constructor() { }
@Input() number:any;

@Output() 
change:EventEmitter<number> = new EventEmitter<number>();

increment() {
  this.number++;
  this.change.emit(this.number);
}

decrement() {
  this.number--;
  this.change.emit(this.number);
}
}
