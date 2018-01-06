import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs/Rx";
import {Injectable} from '@angular/core';
import {RegistrationComponent} from '../registration/registration.component';

@Injectable()
export class ExitRegistrationGuard implements CanDeactivate<RegistrationComponent>{

  canDeactivate(component: RegistrationComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot
  ):  Observable<boolean> | Promise<boolean> | boolean {

    //TODO make popover beutyful and find word beutiful
    return component.canDeactivate() ||
           confirm("You are going to left registration page with fulfilled fields, are you sure?");
  }
}
