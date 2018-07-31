import { Component, OnInit } from '@angular/core';
import { user } from './data-model';
import { map} from 'rxjs/operators';
import { LoginServiceService } from './service/login-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
 
  username:any;


  constructor(private lis : LoginServiceService){

  }

  ngOnInit(): void {

    this.lis.onUserChange().subscribe(data =>{
      this.username =  data;
    });
  }

  
 
}
