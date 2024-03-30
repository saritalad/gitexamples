import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomInterceptor } from './custom.interceptor';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestMenuComponent } from './rest-menu/rest-menu.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthService } from './auth.service';
import { OrderReceiptComponent } from './order-receipt/order-receipt.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    CartComponent,
    PagenotfoundComponent,
    AboutUsComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    UserdetailsComponent,
    OrderlistComponent,
    RestaurantlistComponent,
    RestaurantsComponent,
    RestMenuComponent,
    MenuItemsComponent,
   
    PaymentComponent,
    OrderReceiptComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CustomInterceptor,
      multi:true
    },AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
