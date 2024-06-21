import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { DetailComponent } from './detail/detail.component';
import { Product } from './types/product.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataGridComponent, HttpClientModule, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private _http = inject(HttpClient);

  // store list of products
  products: Product[] = [];

  // columns to be displayed
  columns = [
    { field: 'ProductName', title: 'Product' },
    { field: 'ProductID', title: 'ID' },
    { field: 'UnitPrice', title: 'Unit Price' },
    { field: 'QuantityPerUnit', title: 'Qty Per Unit' },
  ];

  style = {
    height: '400px',
  };

  // expand flag
  isExpand = true;

  ngOnInit(): void {
    this._http
      .get<Product[]>('assets/products.json')
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  expand(product: Product) {
    product.expanded = !product.expanded;
  }
}
