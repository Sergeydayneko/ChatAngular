import {CartService} from "../service/cartService";
import {Injectable} from "@angular/core";

@Injectable()
export class Order {
  public name: string;
  public address: string;
  public shipped: boolean = false;

  constructor(public cart: CartService) { }

  clear() {
    this.name = this.address =  null;
    this.shipped = false;
    this.cart.clear();
  }
}
