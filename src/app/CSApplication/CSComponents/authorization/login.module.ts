import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from "./registration/registration.component";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationService } from './service/registration.service';
import { AlertService } from './service/alert.service';
import { AlertComponent } from './directive/alert.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from './service/login.service';

@NgModule({
  declarations: [
    LoginComponent,
    AlertComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [

  ],
  providers: [
    RegistrationService,
    AlertService,
    LoginService
  ]
})
export class AuthorizationModule { }
