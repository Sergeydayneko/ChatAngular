import { Component } from '@angular/core';
import { User } from '../model/userModel';
import {LoginService} from '../service/login.service';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  loading: boolean = false;

  constructor(public loginService: LoginService,
              private cookie: CookieService) { }

  login() {
    this.loading = false;
    this.loginService.userLogin(this.user)
      .subscribe(
          data => {
            console.log(data)
          },
          error =>{
            console.log(error)
          }
      )
  }

  get token() {
    return this.cookie.get('access_token');
  }
}
