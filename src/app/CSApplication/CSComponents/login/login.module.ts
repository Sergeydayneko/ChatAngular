import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [

  ]
})
export class LoginModule { }
