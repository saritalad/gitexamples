import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

export const unsavedDataGuard: CanDeactivateFn<RegistrationComponent> = (component:RegistrationComponent, currentRoute:ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState) => {
  return confirm("Do you want to leave?, without saving data");
};
