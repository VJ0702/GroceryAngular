import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../features/category/services/product.service';
import { ApiService } from '../../../features/category/services/api.service';

@Component({
  selector: 'app-best-selling-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './best-selling-products.component.html',
  styleUrl: './best-selling-products.component.css'
})
export class BestSellingProductsComponent implements OnDestroy {

  private getProductSubscription?: Subscription;
  data: any;  // To store the fetched data
  errorMessage: string = '';  // To store error message if any
  products: any[] = [];

  constructor(private productService: ProductService, private apiService: ApiService) { }


  // Call the API when the component initializes
  ngOnInit(): void {

    this.fetchProducts();


    // this.productService.getProducts().subscribe({
    //   next: (response) => {
    //     this.products = response;  // Store the data in the variable
    //     //console.log('products');
    //     //console.log(this.data);
    //   },
    //   error: (error) => {
    //     this.errorMessage = 'Error fetching data';  // Handle error
    //     console.error('Product API Error: ', error);  // Log error to the console
    //   }
    // });
  }

  fetchProducts(): void {
    this.apiService.get<any[]>('api/Product/productList').subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Error fetching products:', err),
    });
  }


  // Helper to generate star array

  generateStars(rating: number): { type: 'full' | 'half' | 'empty' }[] {
    const stars: { type: 'full' | 'half' | 'empty' }[] = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push({ type: 'full' });
      } else if (rating > i - 1) {
        stars.push({ type: 'half' });
      } else {
        stars.push({ type: 'empty' });
      }
    }
    return stars;
  }


  calculateOriginalPrice(discountedPrice: number, discountPercentage: number): number {
    return discountedPrice / (1 - (discountPercentage / 100));
  }

  ngOnDestroy(): void {
    this.getProductSubscription?.unsubscribe();
  }
}
