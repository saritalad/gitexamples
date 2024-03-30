import { Component } from '@angular/core';
import { Receipt } from '../Models/Receipt';
import { CartsService } from '../carts.service';
import { Payment } from '../Models/Payment';

@Component({
  selector: 'app-order-receipt',
  templateUrl: './order-receipt.component.html',
  styleUrls: ['./order-receipt.component.css']
})
export class OrderReceiptComponent  {
  orderReceipt:Receipt[]=[];
  payment:Payment[]=[];

  /**
   *
   */
  constructor(private service:CartsService) {}


    ngOnInit()
    { debugger;
      this.service.getOrderReceipt().subscribe(data=>{
        this.orderReceipt=data;
        console.log(this.orderReceipt)
      })

      this.service.getPaymentDetails().subscribe(data=>{
        this.payment=data;
        console.log(this.payment)
      })
    }
    
    calculateTotalPrice(): number {
      let totalPrice = 0;
      this.orderReceipt.forEach(item => {
        totalPrice += item.price * item.quantity;
      });
      return totalPrice;
    }
  

}


