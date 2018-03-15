import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store.component';
import { RouterModule } from '@angular/router';

const appStoreHome = [
  {
    path: "store",
    component: StoreComponent
  }
];

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    RouterModule.forChild(appStoreHome)
  ]
})
export class StoreModule { }
