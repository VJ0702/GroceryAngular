import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../../../features/category/services/category.service';
import { CommonModule } from '@angular/common';
import { CategorySearchRequest } from '../../../../features/category/models/category-model/category-search-request.model';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.css'
})
export class CategoryDetailComponent implements OnDestroy {
  categorySearchModel: CategorySearchRequest;
  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute) {
    this.categorySearchModel = {
      id: 0,
      name: '',
      slug: ''
    };
  }

  categoryDetails: any;
  products: any;
  loading: boolean = true; // Loader flag
  errorMessage: string | null = null; // Error message if API fails

  private getCategorySubscription?: Subscription;

  ngOnInit(): void {
    this.fetchCategoryDetails();
  }

  fetchCategoryDetails(): void {
    const urlHandle = this.activatedRoute.snapshot.paramMap.get('urlHandle');

    if (!urlHandle) {
      this.errorMessage = 'Invalid category URL';
      this.loading = false;
      return;
    }
    this.categorySearchModel.id = 0;
    this.categorySearchModel.slug = urlHandle;
    // Call service to fetch category details
    this.categoryService.getCategoryDetails(this.categorySearchModel).subscribe(
      (data) => {
        this.categoryDetails = data; // Bind fetched details
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to fetch category details.';
        console.error(error);
        this.loading = false;
      }
    );
  }


  ngOnDestroy(): void {
    this.getCategorySubscription?.unsubscribe();
  }
}
