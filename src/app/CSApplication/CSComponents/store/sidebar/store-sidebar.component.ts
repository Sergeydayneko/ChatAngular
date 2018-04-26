import {Component, OnInit} from "@angular/core";
import {BookService} from "../service/treeService";
import {TreeviewConfig, TreeviewItem} from "ngx-treeview";

@Component({
  selector: "cs-store-sidebar",
  templateUrl: "store-sidebar.component.html"
})
export class StoreSidebarComponent implements OnInit{
  constructor(private service: BookService) {}

  dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];


  ngOnInit() {
    this.items = this.service.getBooks();
  }

  onFilterChange(value: string) {
    console.log('filter:', value);
  }
}
