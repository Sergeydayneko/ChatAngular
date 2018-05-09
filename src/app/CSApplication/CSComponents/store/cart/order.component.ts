import {NgForm} from "@angular/forms";
import {Order} from "../model/order.model";
import {Component} from "@angular/core";
import {OrderService} from "../service/order.service";
import {CartService} from "../service/cartService";

@Component({
  moduleId    : module.id,
  templateUrl : "order.component.html",
  styleUrls   : ["order.component.scss"]
})
export class OrderComponent {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public repository : OrderService,
              public order      : Order,
              public cart       : CartService
  ) {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.order.orderLines = this.cart.lines;
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
