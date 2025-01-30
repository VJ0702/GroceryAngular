import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { CategorySearchRequest } from '../models/category-model/category-search-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private apiService: ApiService) {

  }
  private categoryEndpoint = 'api/Category/categoryList';
  private categoryDetailEndpoint = 'api/Category/categoryDetail';

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7027/api/Categories/CreateCategory', model);
  }

  // Get all categories (to use urlHandle)
  getCategories(): Observable<any[]> {
    return this.apiService.get<any[]>(this.categoryEndpoint);
  }

  // POST request to get category details
  getCategoryDetails(categorySearchModel: CategorySearchRequest): Observable<any> {
    return this.apiService.post<any>(this.categoryDetailEndpoint, categorySearchModel);
  }

  // getCategoryDetails(model:CategorySearchRequest):Observable<void>{
  //   return this.apiService.post<any[]>(categoryEndpoint,this.model);
  // }

  // Method to get category by ID
  getCategoryById(id: number): Observable<any> {
    const url = `${'https://localhost:7027/api/Categories/CategoryById'}/${id}`;  // Construct the URL with the id
    return this.http.get(url);  // Call API to get category by id
  }
}
