import { Component } from '@angular/core';
import { Payment } from '../Models/Payment';
import { CartsService } from '../carts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  payment:Payment;

  /**
   *
   */
  constructor(private service:CartsService ,private route:Router ) {
    
    
  }

  submitPayment(paymentForm: any): void {
  
      this.payment = paymentForm.value;
      console.log('Form data:', this.payment);
      this.service.addPaymentDetails(this.payment).subscribe(data=>{
        console.log(this.payment);
        alert("Ordered successfully!")
        this.route.navigateByUrl("receipt");

      
      })



    } 
  }

