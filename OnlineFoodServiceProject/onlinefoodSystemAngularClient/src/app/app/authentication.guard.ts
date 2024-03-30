import { CanActivateFn } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {


  let userStatus=localStorage.getItem("logged")
  if(userStatus=="true")
  return true;
else
{
  alert("You are not Logged In Please Log in first!")
   return false;
}


};


