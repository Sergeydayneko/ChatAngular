import {Component, OnInit} from "@angular/core";
import {ProductService} from "../../../store/service/product.service";
import {Order} from "../../../store/model/order.model";
import {OrderService} from "../../../store/service/order.service";
import {AdminOrder} from "../../../store/model/admin-order.model";

@Component({
  templateUrl: "orders.component.html"
})
export class OrdersAdminComponent {
  // TODO Сделать кнопку для отображения всех заказов
  includedShipped = false;

  constructor(private orderRepository: OrderService) {}

  // TODO заменить на Orders[]
  get getOrders(): AdminOrder[] {
    const that = this;
    return this.orderRepository.getOrders()
      .filter(order => that.includedShipped || !order.shipped)
  }


  markShipped(order: AdminOrder) {
    order.shipped = true;
    delete order.orderLines;
    this.orderRepository.updateOrder(order);
  }

  delete(id: number) {
    this.orderRepository.deleteOrder(id);
  }

}
