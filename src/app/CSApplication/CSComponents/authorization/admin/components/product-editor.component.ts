import {Component} from "@angular/core";
import {ProductService} from "../../../store/service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../store/model/product.model";
import {NgForm} from "@angular/forms";

@Component({
  templateUrl: "product-editor.component.html"
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();

  constructor(
    private repository : ProductService,
    private router     : Router,
    activeRoute        : ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(
        this.product,
        this.repository.getProduct(activeRoute.snapshot.params["id"])
        );

    }
  }

  // TODO для чего используется ngForm
  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }



}
