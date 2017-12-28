import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MessageService } from './CSApplication/shared/chatService/messages.service'
import { AppComponent } from './app.component';
import { LoginComponent } from './CSApplication/CSComponents/login/login.component';
import {MaterializeModule} from 'angular2-materialize';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
