import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of, } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 

 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  result:Observable<any>;
  user:String;
  userEmitter = new EventEmitter<String>();
  constructor(private http: HttpClient) {
   }
   login(username:string, password:string): Observable<any> {
 
    var body = {
      user:"",
      password:""
    };
    body.user = username;
    body.password = password;

    this.result = this.http
     .post('/login', body,httpOptions);
     this.result.subscribe(data => {
          if(data != -1) {
            this.user = data.user;
            this.userEmitter.emit(this.user);
          }
     });
     return this.result;
   }
   
  onUserChange() {
    return this.userEmitter;
  }

   private extractData(res: Response) {
    let body = res.json();
    return body || {};
   }

}
