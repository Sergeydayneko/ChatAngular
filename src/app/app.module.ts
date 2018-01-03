import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MessageService } from './CSApplication/shared/chatService/messages.service'
import { AppComponent } from './app.component';
import { LoginComponent } from './CSApplication/CSComponents/login/registration/registration.component';
import {MaterializeModule} from 'angular2-materialize';
import { RouterModule, Routes} from '@angular/router';
import { LoginModule } from './CSApplication/CSComponents/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import {AlertComponent} from './CSApplication/CSComponents/login/directive/alert.component';

const appRoutes: Routes =[
  { path: 'login', component: LoginComponent},
  { path: 'alert', component: AlertComponent},
  { path: '*', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    HttpClientModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
