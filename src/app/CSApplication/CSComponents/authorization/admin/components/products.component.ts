import {Component} from "@angular/core";
import {ProductService} from "../../../store/service/product.service";
import {Product} from "../../../store/model/product.model";

@Component({
  templateUrl: "products.component.html"
})
export class ProductsAdminComponent {
  constructor(private repository: ProductService) {}

  get getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
}
