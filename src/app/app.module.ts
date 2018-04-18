import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MessageService } from "./CSApplication/shared/chatService/messages.service";
import { AppComponent } from "./app.component";
import { MaterializeModule } from "angular2-materialize";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizationModule } from "./CSApplication/CSComponents/authorization/auth.module";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "./CSApplication/CSComponents/store/store.module";
import { HomeModule } from "./CSApplication/CSComponents/home/home.module";
import {GlobalGuard} from "./CSApplication/shared/guards/firstEntry.guard";

const appRoutes: Routes = [
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    StoreModule,
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    AuthorizationModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    GlobalGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
