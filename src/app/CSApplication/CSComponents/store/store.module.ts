import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store.component';
import { RouterModule } from '@angular/router';
import {CartService} from "./service/cartService";
import {CartBlockComponent} from "./cart/cartBlock.component";
import {fakeDataSource} from "./service/static.datacource";
import {ProductService} from "./service/product.service";
import {PaginationDirective} from "../../shared/pagintaion/pagination.directive";
import {CartComponent} from "./cart/cart.component";
import {OrderService} from "./service/order.service";

const appStoreHome = [
  {
    path: "store",
    component: StoreComponent
  }
];

@NgModule({
  declarations: [
    StoreComponent,
    CartBlockComponent,
    PaginationDirective,
    CartComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    RouterModule.forChild(appStoreHome)
  ],
  providers: [
    CartService,
    ProductService,
    OrderService,
    fakeDataSource
  ]
})
export class StoreModule { }
