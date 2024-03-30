import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { cart } from '../Models/Cart';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../Models/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: cart[] = []; // Array to store cart items
  orders:Order[]=[];

  constructor(private cartService: RestaurantService, private router:Router) { } // Inject cart service if using one

  ngOnInit() {
    
    // Retrieve cart items from service
   this.cartService.getCartItems().subscribe(data=>{
    this.cartItems=data;
    console.log(this.cartItems);
   }) // Use your service method to get cart items
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    this.cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
    else {
      // Remove item from cart if quantity becomes 0
      this.cartItems.splice(index, 1);
    }
  }

  // Navigate to payment page
  goToPayment(cartItems:any[]): void {
    debugger;
    // Navigate to your payment page route
   
    this.cartService.addOrderDetails(cartItems).subscribe(data=>{
      this.orders=data;
      console.log("Cart Items with Quantity and Total Price:", cartItems); 
    })
   
    this.router.navigateByUrl("payment");
  }
  
  removeItem(index: number): void {
    debugger;
    
    this.cartService.RemoveItemFromCart(index).subscribe(data=>{
      this.cartItems=data;
      console.log(this.cartItems);
    });
  }
  
  
 
}
