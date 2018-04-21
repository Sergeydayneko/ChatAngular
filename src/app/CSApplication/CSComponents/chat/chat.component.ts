import {Component} from "@angular/core";
import {Product} from "../store/model/model.product";

@Component({
  templateUrl: "chat.component.html"
})
export class ChatComponent {

  products: Product[];

  constructor() {}

}
