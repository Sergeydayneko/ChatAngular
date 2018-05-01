import {Product} from "../model/model.product";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const PROTOCOL = "http";
const PORT     = "8081";

@Injectable()
export class ProductService {
  private products: Product[] =  [];
  private categories: string[] = [];
  private baseUrl: string;
  private productsUrl: string = "/products"

  // TODO Заменяем на рест апи
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;

    this.http.get(`${this.baseUrl}${this.productsUrl}`)
        .subscribe(products => {
          this.products = products as Product[];
          this.categories = this.products
            .map(product => product.category)
            .filter((category, index, array) => array.indexOf(category) == index)
            .sort();
        });
  }

  getProducts(categories: string[] = null): Product[] | null {
    return this.products
      .filter(p => categories === null || categories.indexOf(p.category) >= 0);
  }

  getProduct(id: number): Product | null {
    return this.products.find(p => p.id === id);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
