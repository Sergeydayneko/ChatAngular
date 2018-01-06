import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MessageService } from './CSApplication/shared/chatService/messages.service'
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes} from '@angular/router';
import { AuthorizationModule } from './CSApplication/CSComponents/authorization/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ExitRegistrationGuard} from './CSApplication/CSComponents/authorization/guards/registration.guard';


const appRoutes: Routes =[
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
    MessageService,
    ExitRegistrationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
