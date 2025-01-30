import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-external-header',
  standalone: true,
  imports: [SideMenuComponent, RouterModule],
  templateUrl: './external-header.component.html',
  styleUrl: './external-header.component.css'
})
export class ExternalHeaderComponent {

}
