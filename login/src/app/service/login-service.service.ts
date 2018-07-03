import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) {
   }
   login(username:string, password:string): Observable<any> {
 
    var body = {
      user:"",
      password:""
    };
    body.user = username;
    body.password = password;

     return this.http
     .post('/login', body,httpOptions);
   }

   private extractData(res: Response) {
    let body = res.json();
    return body || {};
}

}
