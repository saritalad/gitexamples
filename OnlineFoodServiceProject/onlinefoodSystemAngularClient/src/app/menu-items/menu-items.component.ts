import { Component } from '@angular/core';
import { MenuItem } from '../Models/MenuItem';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { cart } from '../Models/Cart';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent {
  menuItems:MenuItem[]=[];
  Id:number=0;
  cartItems:cart[]=[]; // Array to store cart items


  /**
   *
   */
  constructor(private service:RestaurantService,private active:ActivatedRoute) {
    
  }

//   OnClick(menuItems:any)
// {
//   debugger;
//   //this.cartItems=this.menuItems;
//   this.cartItems.push(this.menuItems);
//   this.service.addItemToCart(this.cartItems);
//   alert("Items added to cart");
//   console.log('Item added to cart:', this.cartItems);
  
// }
OnClick(menuItem: any) {
  debugger
  this.service.addItemToCart(menuItem).subscribe(
    (response) => {
      alert("Item added to cart");
      console.log('Item added to cart:', menuItem);
    },
    (error) => {
      console.error('Error adding item to cart:', error);
      alert("Failed to add item to cart");
    }
  );
}

  
  ngOnInit()
  {debugger;
    this.Id=this.active.snapshot.params['id']
    this.service.getMenuItemsByRestId(this.Id).subscribe(data=>{
      this.menuItems=data,
     
      console.log(this.menuItems);
    })
  }

}
