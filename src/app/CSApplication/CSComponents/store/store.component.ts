import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import { Product } from "./model/model.product";
import { ProductService} from "./service/product.service";
import { CartService } from "./service/cartService";
import {Router} from "@angular/router";
import {BookService} from "./service/treeService";
import {TreeviewConfig, TreeviewItem} from "ngx-treeview";
// import { StoreService } from "./service/store.service";
//  TODO при передаче продукты необходимо будет передавать в snapshot его id https://metanit.com/web/angular2/7.3.php

@Component({
  selector: 'store',
  moduleId: module.id,
  styleUrls: ["store.component.scss"],
  templateUrl: 'store.component.html',
  providers: [
    BookService
  ]
})
export class StoreComponent {
  // TODO пока сделано с перерисовкой компонента при изменении состояния
  // private strategy: ChangeDetectionStrategy.OnPush
}
