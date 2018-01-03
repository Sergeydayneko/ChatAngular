import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MessageService } from './CSApplication/shared/chatService/messages.service'
import { AppComponent } from './app.component';
import { RegistrationComponent } from './CSApplication/CSComponents/authorization/registration/registration.component';
import {MaterializeModule} from 'angular2-materialize';
import { RouterModule, Routes} from '@angular/router';
import { AuthorizationModule } from './CSApplication/CSComponents/authorization/login.module';
import { HttpClientModule } from '@angular/common/http';
import {AlertComponent} from './CSApplication/CSComponents/authorization/directive/alert.component';
import {LoginComponent} from './CSApplication/CSComponents/authorization/login/login.component';


const appRoutes: Routes =[
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
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
    AuthorizationModule,
    HttpClientModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
