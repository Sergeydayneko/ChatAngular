import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from "./registration/registration.component";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationService } from './service/registration.service';
import {LoginComponent} from './login/login.component';
import {LoginService} from './service/login.service';
import {ExitRegistrationGuard} from './guards/registration.guard';
import {RouterModule} from '@angular/router';
import {JwtInterceptor} from './helpers/jwt.interceptor';

const appRoutesAuth = [
  {
    path: 'registration',
    component: RegistrationComponent,
    canDeactivate: [ExitRegistrationGuard]
  },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //TODO Watch about forRoot and forChild specification
    RouterModule.forChild(appRoutesAuth)
  ],
  exports: [

  ],
  providers: [
    RegistrationService,
    LoginService,
    ExitRegistrationGuard,
    JwtInterceptor 
  ]
})
export class AuthorizationModule { }
