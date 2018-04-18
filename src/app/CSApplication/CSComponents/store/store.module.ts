import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store.component';
import { RouterModule } from '@angular/router';
import {Cart} from "./service/cartService";
import {CartSummaryComponent} from "./cart/cartBlock.component";
import {fakeDataSource} from "./service/static.datacource";
import {ProductRepository} from "./service/product.service";

const appStoreHome = [
  {
    path: "store",
    component: StoreComponent
  }
];

@NgModule({
  declarations: [
    StoreComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    RouterModule.forChild(appStoreHome)
  ],
  providers: [
    Cart,
    ProductRepository,
    fakeDataSource
  ]
})
export class StoreModule { }
