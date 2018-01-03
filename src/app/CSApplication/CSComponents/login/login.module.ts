import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './service/registration.service';
import {AlertService} from './service/alert.service';
import {AlertComponent} from './directive/alert.component';

@NgModule({
  declarations: [
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [

  ],
  providers: [
    LoginService,
    AlertService
  ]
})
export class LoginModule { }
