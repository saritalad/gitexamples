import { Component } from '@angular/core';
import { Restaurant } from '../Models/Restaurant';
import { RestaurantService } from '../restaurant.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent {
  restaurants:Restaurant[]=[];
  constructor(private service:RestaurantService){

  }

  ngOnInit()
  {
    this.service.getAllRestaurants().subscribe(data=>{
      this.restaurants=data;
      console.log(this.restaurants)
    })
  }

  downloadExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.restaurants);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Candidates');
    XLSX.writeFile(wb, 'restautants.xlsx');
  }

}
