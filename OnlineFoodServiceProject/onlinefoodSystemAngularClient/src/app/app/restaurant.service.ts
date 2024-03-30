import { Injectable } from '@angular/core';
import { Restaurant } from './Models/Restaurant';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { cart } from './Models/Cart';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private cartItems: any[] = []; // Array to store cart items

 url:string="https://localhost:44392/api/Restaurant"

 url2:string="https://localhost:44392/api/Menu/GetMenusByRestaurant/"

 url3:string="https://localhost:44392/api/Cart"

 url4:string="https://localhost:44392/api/Cart"

 url5:string="https://localhost:44392/api/Order"

 httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
 
  constructor(private service:HttpClient) { }

  getAllRestaurants():Observable<any>
  {
    return this.service.get<any>(this.url);
  }

  getRestaurantById(id:number):any
  {
    return this.service.get<any>(this.url+"/"+id);
  }

  getMenuItemsByRestId(id:number):Observable<any>
  {
    return this.service.get<any>(this.url2+id);
  }

  
  RemoveItemFromCart(id:any):Observable<any>
  {
    return this.service.delete<any>(this.url4+"/"+id);

  }

  addItemToCart(item:any): Observable<any> {
    console.log(this.url3);
    return this.service.post<any>(this.url3,item,this.httpOptions).pipe(catchError(this.handleError));
  }
  getCartItems(): Observable<any>{
    return this.service.get<any>(this.url3);
  }

  addOrderDetails(Order:any):Observable<any>{

    return this.service.post<any>(this.url5,Order);
  }
  handleError(error:HttpErrorResponse){
    let errorMessage="";
    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }

  
}
