import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {OrdersAdminComponent} from "./components/orders.component";
import {ProductsAdminComponent} from "./components/products.component";
import {ProductEditorComponent} from "./components/product-editor.component";
import {PaginationDirective} from "../../../shared/pagintaion/pagination.directive";
import {ProductService} from "../../store/service/product.service";

const routing = RouterModule.forChild([
  {
    path: "main",
    component: AdminComponent,
    children: [
      { path: "products/:mode/:id", component: ProductEditorComponent },
      { path: "products/:mode", component: ProductEditorComponent },
      { path: "products", component: ProductsAdminComponent },
      { path: "orders", component: OrdersAdminComponent },
      { path: "**", redirectTo: "products" }
    ]
  }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [
    AdminComponent,
    OrdersAdminComponent,
    ProductsAdminComponent,
    ProductEditorComponent
  ]
})
export class AdminModule {}
