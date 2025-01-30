import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { response } from 'express';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnDestroy {

  private getCategorySubscription?: Subscription;
  data: any;  // To store the fetched data
  errorMessage: string = '';  // To store error message if any

  constructor(private categoryService: CategoryService) {

  }

  // Call the API when the component initializes
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.data = response;  // Store the data in the variable
      },
      error: (error) => {
        this.errorMessage = 'Error fetching data';  // Handle error
        console.error('API Error: ', error);  // Log error to the console
      }
    });
  }

  // Method to handle edit button click
  editCategory(id: any): void {
    console.log('Edit category with id:', id);  // This is where you'll handle the click

    // Call the API to get the category data by id
    this.categoryService.getCategoryById(id).subscribe({
      next: (category) => {
        console.log('Category data:', category);
        // You can now use the data as needed (e.g., prefill a form for editing)
      },
      error: (error) => {
        console.error('Error fetching category:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.getCategorySubscription?.unsubscribe();
  }

}
