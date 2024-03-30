

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
IsLoggedIn:string='true';

  // loginobj1:any={
  //   email:'Shatakshi@gmail.com',
  //   password:'Shat@123'
  // }
  loginobj:any={
    email:'',
    password:''
  }
  passwordFieldType: string = 'password';

  /**
   *
   */
  constructor(private http:HttpClient,private router:Router) {}

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }


  
  onLogin(form:any){

    debugger;
    this.loginobj=form.value;

    this.http.post('https://localhost:44392/api/Authenticate/Login', this.loginobj).subscribe((res:any)=>{
      debugger;
      if(res)
      {
        alert('Login Successfull!')
        localStorage.setItem('loginToken', res.token)
        localStorage.setItem("logged",this.IsLoggedIn)
        this.router.navigateByUrl("home")
        
      }
      
      else
      alert("not logged")

    })
  }





}
