import {Component} from "@angular/core";
import {BookService} from "../service/treeService";
import {Product} from "../model/model.product";
import {Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {CartService} from "../service/cartService";

@Component({
  selector: "cs-products",
  templateUrl: "products.component.html"
})
export class ProductsComponent {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductService,
              private cart: CartService,
              private router: Router,
              private service: BookService
              // TODO пока сделано с перерисовкой компонента при изменении состояния
              // private strategy: ChangeDetectionStrategy.OnPush
  ) {}

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
