import {Order} from "../model/order.model";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class OrderService {
  private orders;
  private loaded: boolean = false;

  constructor(private http: HttpClient) {}

  loadOrders() {
    this.loaded = true;
     return this.orders = this.http.get("localhost:8081/getorders")
          .subscribe(orders => {
            if (orders instanceof Array) {
              orders.map(order => {
                return {
                  id      : order["id"],
                  name    : order["name"],
                  address : order["address"],
                  shipped : order["shipped"]
                }
              })
            }
          })
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders()
    }
    return this.orders
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return Observable.from([order]);
  }

  updateOrder(order: Order) {
    this.http.put("localhost:8081/updateorder", JSON.stringify(order))
      .subscribe(uorder => {
        this.orders.splice(this.orders.findIndex(
          order => order.id == uorder["id"]), 1, order);
      })
  }

  deleteOrder(id: number) {
    this.http.delete(`localhost:8081/deleteorder/${id}`)
      .subscribe(order => {
        this.orders.splice(this.orders.findIndex(order => id == order.id))
      })
  }

  private handleError() {
    console.log(arguments[0])
  }


}
