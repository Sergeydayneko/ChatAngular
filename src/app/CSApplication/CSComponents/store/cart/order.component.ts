import {NgForm} from "@angular/forms";
import {Order} from "../model/order.model";
import {Component} from "@angular/core";
import {OrderService} from "../service/order.service";

@Component({
  moduleId: module.id,
  templateUrl: "order.component.html"
})
export class OrderComponent {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public repository: OrderService,
              public order: Order) {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
