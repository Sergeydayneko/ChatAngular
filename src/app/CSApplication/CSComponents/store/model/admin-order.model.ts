import {CartLine} from "../service/cartService";

export class AdminOrder {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public orderLines: CartLine[],
    public shipped: boolean = false
  ) {}
}
