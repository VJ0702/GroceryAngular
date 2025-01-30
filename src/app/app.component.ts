import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { HomeIndexComponent } from './web/component/_home/home-index/home-index.component';
// import { HomeBannerComponent } from './web/component/_home/home-banner/home-banner.component';
import { ExternalFooterComponent } from './web/component/_shared/external-footer/external-footer.component';
import { DOCUMENT } from '@angular/common';
import { ExternalHeaderComponent } from './web/component/_shared/external-header/external-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CategoryListComponent, FormsModule, HomeIndexComponent,
    ExternalFooterComponent, ExternalHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AngularCore';
  constructor(@Inject(DOCUMENT) private document: Document) {

  }
  ngOnInit() {
    this.loadScript('js/script.js');
  }

  loadScript(src: string) {
    const script = this.document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    this.document.body.appendChild(script);
  }
}
