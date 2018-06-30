import {Component} from "@angular/core";
import {CartService} from "../service/cartService";


@Component({
  selector: "cart-summary",
  templateUrl: "cartBlock.component.html",
  styleUrls: ["cartBlock.component.scss"]
})
export class CartBlockComponent {
  constructor(public cart: CartService) {}
}
