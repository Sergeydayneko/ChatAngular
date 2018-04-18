import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class GlobalGuard implements CanActivate{
  private firstCheck: boolean = true;

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot){
    if (this.firstCheck) {
      // TODO дописывать роуты по мере создания компонентов(в первую очередь корзина)
      this.router.navigateByUrl("/");
      this.firstCheck = false;
      return false;
    }
    return true;
  }
}
