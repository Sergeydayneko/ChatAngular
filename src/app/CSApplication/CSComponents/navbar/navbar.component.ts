import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {LoginService} from "../authorization/service/login.service";

@Component({
  selector    : "cs-navbar",
  styleUrls   : ["navbar.component.css"],
  templateUrl : "navbar.component.html"
})
export class NavbarComponent implements OnInit{
  public logged: boolean;

  constructor(private router: Router,
              private cookie: CookieService,
              private login: LoginService) {}

  goHome() {
    this.router.navigate(["home"]);
  }

  goLogin() {
    this.router.navigate(["login"]);
  }

  goRegistration() {
    this.router.navigate(["registration"]);
  }

  goStore() {
    this.router.navigate(["store"]);
  }

  goChat() {
    this.router.navigate(["chat"])
  }

  public ngOnInit() {
    this.logged = this.cookie.check("access_token");
  }
}
