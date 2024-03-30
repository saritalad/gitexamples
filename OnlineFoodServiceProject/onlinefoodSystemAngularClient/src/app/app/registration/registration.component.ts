import { Component } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user:User;
  constructor(private service:UserService, private route:Router){

  }

  OnSubmit(form:any)
  {
    debugger;
this.user=form.value;
// console.log(this.user);
    this.service.AddnewUser(this.user).subscribe(data=>{
      console.log(this.user);
      alert("registered successfully!")
      this.route.navigateByUrl("login")
      

    })
    
  }


}
