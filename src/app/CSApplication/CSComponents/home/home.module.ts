import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HttpClientModule } from "@angular/common/http";
import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

const appHomePath = [
  {
    path: "home", component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    MaterializeModule,
    BrowserModule,
    RouterModule.forChild(appHomePath)
  ]
})
export class HomeModule {}
