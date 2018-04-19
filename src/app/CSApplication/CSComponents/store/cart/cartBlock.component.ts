import {Component} from "@angular/core";
import {CartService} from "../service/cartService";


@Component({
  selector: 'cart-summary',
  moduleId: module.id,
  templateUrl: 'cartBlock.component.html'
})
export class CartBlockComponent {
  constructor(public cart: CartService) {}
}
