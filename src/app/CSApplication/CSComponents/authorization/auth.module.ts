import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RegistrationComponent } from "./registration/registration.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationService } from "./service/registration.service";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./service/login.service";
import { ExitRegistrationGuard } from "./guards/registration.guard";
import { RouterModule } from "@angular/router";
import { JwtInterceptor } from "./helpers/jwt.interceptor";
import { appRoutesAuth } from "./auth-routes";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // TODO Watch about forRoot and forChild specification
    RouterModule.forChild(appRoutesAuth)
  ],
  exports: [

  ],
  providers: [
    RegistrationService,
    LoginService,
    ExitRegistrationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    }
  ]
})
export class AuthorizationModule { }
