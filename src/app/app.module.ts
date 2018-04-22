import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MaterializeModule } from "angular2-materialize";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizationModule } from "./CSApplication/CSComponents/authorization/auth.module";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "./CSApplication/CSComponents/store/store.module";
import { HomeModule } from "./CSApplication/CSComponents/home/home.module";
import {GlobalGuard} from "./CSApplication/shared/guards/firstEntry.guard";
import {ChatModule} from "./CSApplication/CSComponents/chat/chat.module";

const appRoutes: Routes = [
  { path: "**", redirectTo: "home" }
];

// TODO Должен ли основной модуьл импортировать другие модули ?
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    StoreModule,
    BrowserModule,
    ChatModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    AuthorizationModule,
    HttpClientModule
  ],
  providers: [
    GlobalGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
