import { Component, OnInit } from '@angular/core';
import { User } from '../model/userModel';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  loading: boolean = false;

  constructor(public loginService: LoginService) { }

  login() {
    this.loading = true;
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
    try {
      return localStorage.getItem('currentUser') !== null;
    } catch (error) {
      throw new Error("ошибка локал сторэджа");
    }
  }
}
