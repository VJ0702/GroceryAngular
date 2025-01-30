import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../../../features/category/services/category.service';
import { CommonModule } from '@angular/common';
// import { ApiService } from '../../../../features/category/services/api.service';

@Component({
  selector: 'app-home-categories',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home-categories.component.html',
  styleUrl: './home-categories.component.css'
})
export class HomeCategoriesComponent implements OnDestroy {

  private getCategorySubscription?: Subscription;
  data: any;  // To store the fetched data
  errorMessage: string = '';  // To store error message if any
  categories: any[] = [];

  constructor(private categoryService: CategoryService) {

  }

  // Call the API when the component initializes
  ngOnInit(): void {
    // debugger;
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;  // Assign fetched categories to the categories array
      console.log(categories);
    });
  }

  // fetchCategories(): void {
  //   this.apiService.get<any[]>('api/Category/categoryList').subscribe({
  //     next: (data) => (this.categories = data),
  //     error: (err) => console.error('Error fetching products:', err),
  //   });
  // }

  ngOnDestroy(): void {
    this.getCategorySubscription?.unsubscribe();
  }
}
