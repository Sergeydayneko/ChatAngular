import { Component, OnInit } from "@angular/core";
import { Product } from "./model/model.product";
// import { StoreService } from "./service/store.service";

@Component({
  selector: "cs-store",
  templateUrl: "./store.component.html",
  styleUrls: ["/store.component.css"]
})
export class StoreComponent implements OnInit {
  products: Product;
  // TODO сделать модель продукты и прокинуть получение данных

  // constructor(private storeService: StoreService) {}
//  TODO при передаче продукты необходимо будет передавать в snapshot его id https://metanit.com/web/angular2/7.3.php
  ngOnInit(): void {
    this.getProducts()

  }

  private getProducts() {
    // this.products = this.storeService.fetchItems();

  }
}
