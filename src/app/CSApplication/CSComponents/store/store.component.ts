import { Component, OnInit } from "@angular/core";
import { Product } from "./model/model.product";
import { ProductService} from "./service/product.service";
import { CartService } from "./service/cartService";
import {Router} from "@angular/router";
// import { StoreService } from "./service/store.service";
//  TODO при передаче продукты необходимо будет передавать в snapshot его id https://metanit.com/web/angular2/7.3.php

@Component({
  selector: 'store',
  moduleId: module.id,
  templateUrl: 'store.component.html'
})
export class StoreComponent {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductService,
              private cart: CartService,
              private router: Router) {}

  get products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }


}
