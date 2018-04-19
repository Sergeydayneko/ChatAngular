import {Component} from "@angular/core";
import {Cart} from "../service/cartService";


@Component({
  selector: 'cart-summary',
  moduleId: module.id,
  templateUrl: 'cartBlock.component.html'
})
export class CartBlockComponent {
  constructor(public cart: Cart) {}
}
