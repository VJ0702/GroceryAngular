import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { CategoryDetailComponent } from './web/component/category/category-detail/category-detail.component';
import { HomeIndexComponent } from './web/component/_home/home-index/home-index.component';
import { NotFoundComponent } from './web/component/_shared/not-found/not-found.component';
// import { LoginComponent } from './web/component/user/login/login.component';
// import { RegisterComponent } from './web/component/user/register/register.component';
// import { MyProfileComponent } from './web/component/user/my-profile/my-profile.component';

export const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'admin/categories', component: CategoryListComponent },
    { path: 'admin/categories/add', component: AddCategoryComponent },
    { path: '', component: HomeIndexComponent }, // Default route
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    // { path: 'myprofile', component: MyProfileComponent },
    { path: 'product-category/:urlHandle', component: CategoryDetailComponent },
    { path: '**', component: NotFoundComponent } // Wildcard for unknown paths
];
