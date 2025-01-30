import { Component } from '@angular/core';
import { HomeCategoriesComponent } from '../home-categories/home-categories.component';
import { BestSellingProductsComponent } from '../../best-selling-products/best-selling-products.component';
import { DiscountPromotionsComponent } from '../../discount-promotions/discount-promotions.component';
import { FeaturedProductsComponent } from '../../featured-products/featured-products.component';
import { PopularProductsComponent } from '../../popular-products/popular-products.component';
import { LatestProductsComponent } from '../../latest-products/latest-products.component';
import { LatestBlogComponent } from '../../latest-blog/latest-blog.component';
import { ProductTagsComponent } from '../../product-tags/product-tags.component';
import { OtherInfosComponent } from '../../other-infos/other-infos.component';
import { HomeBannerComponent } from '../home-banner/home-banner.component';

@Component({
  selector: 'app-home-index',
  standalone: true,
  imports: [HomeCategoriesComponent, BestSellingProductsComponent, DiscountPromotionsComponent, FeaturedProductsComponent,
    PopularProductsComponent, LatestProductsComponent, LatestBlogComponent, ProductTagsComponent, OtherInfosComponent, HomeBannerComponent],
  templateUrl: './home-index.component.html',
  styleUrl: './home-index.component.css'
})
export class HomeIndexComponent {

}
