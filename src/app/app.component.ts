import {Component, OnChanges, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {LoginService} from "./CSApplication/CSComponents/authorization/service/login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router,
              public cookie: CookieService,
              private login : LoginService){}

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
}
