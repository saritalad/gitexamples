import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class RestMenuService {
  url:string="https://localhost:44392/api/RestaurantMenu"



  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  constructor(private service:HttpClient) { }

  getAllRestMenu():Observable<any>
  {
    return this.service.get<any>(this.url);
  }

  
  handleError(error:HttpErrorResponse){
    let errorMessage="";
    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
