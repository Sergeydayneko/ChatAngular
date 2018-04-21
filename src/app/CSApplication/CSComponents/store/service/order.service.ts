import {Order} from "../model/order.model";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class OrderService {
  private orders: Order[] = [];

  constructor() {}

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return Observable.from([order]);
  }
}
