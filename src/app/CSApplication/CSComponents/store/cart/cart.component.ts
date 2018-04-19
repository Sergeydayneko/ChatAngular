import {Component} from "@angular/core";
import {CartService} from "../service/cartService";

@Component({
  moduleId: module.id,
  templateUrl: "cart.component.html"
})
export class CartComponent {
  constructor(public cart: CartService) { }
}
