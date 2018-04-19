import {Product} from "../model/model.product";
import {Injectable} from "@angular/core";
import {fakeDataSource} from "./static.datacource";

@Injectable()
export class ProductService {
  private products: Product[] =  [];
  private categories: string[] = [];

  // TODO нужно ли оставлять filter ?
  constructor(private dataSource: fakeDataSource) {
    dataSource.getProducts().subscribe( data => {
      this.products = data;
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) === index).sort();
    });
  }

  getProducts(category: string = null): Product[] | null {
    return this.products
      .filter(p => category === null || category === p.category);
  }

  getProduct(id: number): Product | null {
    return this.products.find(p => p.id === id);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
