import {Order} from "../model/order.model";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AdminOrder} from "../model/admin-order.model";

@Injectable()
export class OrderService {
  private orders: any;
  private loaded: boolean = false;

  constructor(private http: HttpClient) {}

  loadOrders(): Observable<AdminOrder[]> {
    return this.http.get("http://localhost:8081/getorders")
      .map(orders => {
        if (orders instanceof Array) {
          return orders.map(order => {
            return new AdminOrder(
              order.id,
              order.name,
              order.address,
              order.orderLines,
              order.shipped
            )
          })
        }
    })
  }

  // TODO добавить позже, сохранение коллекции на стороне клиента
  getOrders(): AdminOrder[] {
    if (!this.loaded) {
      this.loaded = true;
      this.loadOrders()
        .subscribe(orders => {
          this.orders = orders;
        })
    }
    return this.orders;
  }

  // TODO добавить возвращающее значение
  saveOrder(order: Order) {
    const orderObj = {
      name    : order.name,
      address : order.address,
      lines   : order.orderLines,
      shipped : order.shipped
    };
    return this.http.post("http://localhost:8081/saveorder", orderObj);
  }

  updateOrder(order: AdminOrder) {
    this.http.put("http://localhost:8081/updateorder", order)
      .subscribe(uorder => {
        this.orders.splice(this.orders.findIndex(
          order => order.id == uorder["id"]), 1, uorder);
      })
  }

  deleteOrder(id: number) {
    this.http.delete(`http://localhost:8081/deleteorder/${id}`)
      .subscribe(order => {
        this.orders.splice(this.orders.findIndex(order => id == order.id))
      })
  }

  private handleError() {
    console.log(arguments[0])
  }


}
