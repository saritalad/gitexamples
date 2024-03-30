import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Payment } from './Models/Payment';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  url:string="https://localhost:44392/api/Payment"
  url2:string="https://localhost:44392/api/Payment/PaymentDetails"

  url1:string="https://localhost:44392/api/OrderReceipt"

 
  
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  constructor(private service:HttpClient) { }

  addPaymentDetails(payment:Payment):Observable<any>
  {
    return this.service.post<any>(this.url,payment,this.httpOptions).pipe(catchError(this.handleError));
  }

  getPaymentDetails():Observable<any>
  {
    return this.service.get<any>(this.url2);
  }

  getOrderReceipt():Observable<any>
  {
   return this.service.get<any>(this.url1);
  }

  

  
  handleError(error:HttpErrorResponse){
    let errorMessage="";
    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }


 
}
