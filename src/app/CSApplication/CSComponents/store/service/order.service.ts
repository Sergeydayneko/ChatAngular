import {Order} from "../model/order.model";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {fakeDataSource} from "./static.datacource";

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  constructor(private dataSource: fakeDataSource) {}

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
