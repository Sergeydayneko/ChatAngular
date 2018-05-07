import {Order} from "../model/order.model";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class OrderService {
  private orders: Order[] = [];
  private loaded: boolean = false;

  constructor(private http: HttpClient) {}

  // loadOrders() {
  //   this.loaded = true;
  //   this.http.get("localhost:8081/getorders")
  //     .subscribe(orders => this.orders = orders)
  // }

  //TODO сделать обработку поступающих заказов и посмотреть
  //TODO как идет обработка Observable в подобных случаях

  // getOrders(): Order[] {
  //   if (!this.loaded) {
  //     this.loadOrders()
  //   }
  //   return this.orders
  // }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return Observable.from([order]);
  }

  // TODO Р!!!
  // updateOrder(order: Order) {
  //   this.http.post("localhost:8081/updateorder", JSON.stringify(order))
  //     .subscribe(order => {
  //       this.orders.splice(this.orders.findIndex(
  //         order => order.id == order.id), 1, order);
  //     })
  // }

  deleteOrder(id: number) {
    this.http.delete("localhost:8081/deleteorder")
      .subscribe(order => {
        this.orders.splice(this.orders.findIndex(order => id == order.id))
      })
  }


}
