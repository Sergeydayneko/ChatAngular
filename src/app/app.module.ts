import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MessageService } from "./CSApplication/shared/chatService/messages.service";
import { AppComponent } from "./app.component";
import { MaterializeModule } from "angular2-materialize";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizationModule } from "./CSApplication/CSComponents/authorization/auth.module";
import { HttpClientModule } from "@angular/common/http";
import { ExitRegistrationGuard} from "./CSApplication/CSComponents/authorization/guards/registration.guard";
import { StoreModule } from "./CSApplication/CSComponents/store/store.module";
import { HomeModule } from "./CSApplication/CSComponents/home/home.module";
import { HomeComponent } from "./CSApplication/CSComponents/home/home.component";


const appRoutes: Routes = [
  { path: "**", component: HomeComponent }
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
    ExitRegistrationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
