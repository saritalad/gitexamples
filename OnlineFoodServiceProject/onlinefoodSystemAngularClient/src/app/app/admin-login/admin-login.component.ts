import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
[x: string]: any;
  Aloginobj:any={
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
this.Aloginobj=form.value;
    this.http.post('https://localhost:44392/api/ALogin', this.Aloginobj).subscribe((res:any)=>{
      debugger;
      if(res)
      {
        alert('Login Successfull!')
        
        this.router.navigateByUrl("dashboard")
      }
      else
      alert("not logged")

    })
  }
}
