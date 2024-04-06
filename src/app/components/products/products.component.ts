import { Component } from '@angular/core';
import { Product } from './Product';
import { CurrencyPipe, NgFor, SlicePipe, UpperCasePipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { UahPipe } from '../../pipes/uah.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, UpperCasePipe, SlicePipe, CurrencyPipe, UahPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next: (data:any) => {
          this.products = data
        }
      })
  }
}
