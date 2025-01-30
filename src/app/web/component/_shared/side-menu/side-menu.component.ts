import { Component, OnDestroy } from '@angular/core';
// import { ApiService } from '../../features/category/services/api.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../../features/category/services/category.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnDestroy {
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
    this.categoryService.getCategories().subscribe(
      (response) => {
        this.categories = response;
        console.log('Categories:', response);
      },
      (error) => {
        console.log('Error fetching categories:', error);
      }
    );

    // this.categoryService.getCategories().subscribe(categories => {
    //   this.categories = categories;  // Assign fetched categories to the categories array
    // });
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
