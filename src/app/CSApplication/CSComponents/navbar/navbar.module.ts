import {RouterModule} from "@angular/router";
import {AppComponent} from "../../../app.component";
import {AuthorizationModule} from "../authorization/auth.module";
import {StoreModule} from "../store/store.module";
import {ChatModule} from "../chat/chat.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {GlobalGuard} from "../../shared/guards/firstEntry.guard";
import {MaterializeModule} from "angular2-materialize";
import {LoginService} from "../authorization/service/login.service";
import {HomeModule} from "../home/home.module";
import {NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar.component";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    HomeModule,
    StoreModule,
    BrowserModule,
    ChatModule,
    MaterializeModule,
    RouterModule,
    AuthorizationModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    GlobalGuard,
    LoginService
  ]
})
export class NavbarModule {}
