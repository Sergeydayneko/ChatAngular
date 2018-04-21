import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // TODO рассмотреть переделывание навигации с указанием роутингов в html

  constructor(private router: Router){}

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
