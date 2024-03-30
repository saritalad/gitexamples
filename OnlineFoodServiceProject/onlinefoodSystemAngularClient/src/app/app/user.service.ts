import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='https://localhost:44392/api/User'
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  constructor(private service:HttpClient) { }

  getAllUsers():Observable<any>
  {
    return this.service.get<any>(this.url);
  }

  AddnewUser(u:User):Observable<any>
  {
    console.log(this.url+"/Register");
    return this.service.post<any>(this.url+"/Register",u,this.httpOptions).pipe(catchError(this.handleError));
  }

  


  handleError(error:HttpErrorResponse){
    let errorMessage="";
    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}




