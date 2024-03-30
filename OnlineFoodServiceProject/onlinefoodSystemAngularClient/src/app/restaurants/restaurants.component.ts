import { Component } from '@angular/core';
import { Restaurant } from '../Models/Restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {
  rest:Restaurant[]=[];
 
  /**
   *
   */
  constructor(private service:RestaurantService) {
    
    
  }

  ngOnInit(){
    this.service.getAllRestaurants().subscribe(data=>{
      this.rest=data;
      console.log(this.rest)
    })

  }



  


}
