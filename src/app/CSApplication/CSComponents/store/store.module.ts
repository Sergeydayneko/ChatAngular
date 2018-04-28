import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store.component';
import { RouterModule } from '@angular/router';
import {CartService} from "./service/cartService";
import {CartBlockComponent} from "./cart/cartBlock.component";
import {ProductService} from "./service/product.service";
import {PaginationDirective} from "../../shared/pagintaion/pagination.directive";
import {CartComponent} from "./cart/cart.component";
import {OrderService} from "./service/order.service";
import {GlobalGuard} from "../../shared/guards/firstEntry.guard";
import {OrderComponent} from "./cart/order.component";
import {FormsModule} from "@angular/forms";
import {Order} from "./model/order.model";
import {TreeviewModule} from "ngx-treeview";
import {ProductsComponent} from "./products/products.component";

//TODO переделать из отдельных компонентов в дочерние
const appStoreHome = [
  {
    path: "store",
    component: StoreComponent
  },
  {
    path: "cart",
    component: CartComponent
    // canActivate: [GlobalGuard]
  },
  {
    path: "order",
    component: OrderComponent
    // canActivate: [GlobalGuard]
  }
];

@NgModule({
  declarations: [
    StoreComponent,
    CartBlockComponent,
    PaginationDirective,
    CartComponent,
    OrderComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(appStoreHome),
    TreeviewModule.forRoot()
  ],
  providers: [
    CartService,
    ProductService,
    OrderService,
    Order
  ]
})
export class StoreModule { }
