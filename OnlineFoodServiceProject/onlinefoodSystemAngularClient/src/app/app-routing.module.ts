import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestMenuComponent } from './rest-menu/rest-menu.component';
import { authenticationGuard } from './authentication.guard';
import { unsavedDataGuard } from './unsaved-data.guard';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderReceiptComponent } from './order-receipt/order-receipt.component';


const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"regist", component:RegistrationComponent,canDeactivate:[unsavedDataGuard]},
  {path:"cart",component:CartComponent},
 {path:"payment", component:PaymentComponent},
  {path:"dashboard", component:AdminDashboardComponent,
  children:[
    {path:"userdetails", component:UserdetailsComponent},
    {path:"orderlist", component:OrderlistComponent},
    {path:"restMenu", component:RestMenuComponent},
    {path:"restaurantlist", component:RestaurantlistComponent}
  ]},
  {path:"cart", component:CartComponent},
    {path:"restaurant", component:RestaurantsComponent,canActivate:[authenticationGuard]},
  
  {path:"receipt", component:OrderReceiptComponent},

  {path:"menuItems/:id", component:MenuItemsComponent},
  {path:"alogin", component:AdminLoginComponent},
  {path:"aboutus",component:AboutUsComponent,},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
