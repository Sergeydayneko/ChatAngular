import {Component} from "@angular/core";
import {ProductService} from "../../../store/service/product.service";
import {Order} from "../../../store/model/order.model";
import {OrderService} from "../../../store/service/order.service";

@Component({
  templateUrl: "orders.component.html"
})
export class OrdersAdminComponent {
  // Сделать кнопку для отображения всех заказов
  includedShipped = false;

  constructor(private orderRepository: OrderService) {}

  getOrders(): Order[] {
    return this.orderRepository.getOrders()
      .filter(order => this.includedShipped || order.shipped)
  }


  markShipped(order: Order) {
    order.shipped = true;
    this.orderRepository.updateOrder(order);
  }

  delete(id: number) {
    this.orderRepository.deleteOrder(id);
  }

}
