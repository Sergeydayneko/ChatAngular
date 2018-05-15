import {Product} from "../model/product.model";
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
      .filter(p => categories === null || categories.indexOf(p.category) > -1);
  }

  getProduct(id: number): Product | null {
    return this.products.find(p => p.id === id);
  }

  getCategories(): string[] {
    return this.categories;
  }

  // Добавить id нового продукты при сохранении
  // TODO Необходимо применить Pattern State для админа и для пользователя
  saveProduct(product: Product) {
    if (product.id == null || product.id ==0) {
      this.http.post("http://localhost:8081/saveproduct", product)
        .subscribe(p => this.products.push(p))
    } else {
      this.http.put("http://localhost:8081/updateproduct", product)
        .subscribe(p => {
          this.products
            .splice(this.products.findIndex(
            p => p.id == product.id
            ), 1, product);
        })
    }
  }

  deleteProduct(id: number) {
    this.http.delete(`http://localhost:8081/deleteproduct/${id}`)
      .subscribe(p => {
        this.products.splice(this.products.findIndex(
          p => p.id == id), 1);
      })
  }
}
