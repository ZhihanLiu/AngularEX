import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { signUpForm } from '../data-model';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  ' application/json ',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  signUp( fd :signUpForm): Observable<any>{
    console.log("fd:   "+fd.username);
    return this.http.post('./register',fd,httpOptions);
    }

    data(res: Response) {
      const body = res.json();
      return body || {};
   }
}
