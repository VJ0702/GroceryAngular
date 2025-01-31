import { Component } from '@angular/core';
import { AlertService, AlertMessage } from '../../../../services/common-services/alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})

export class AlertComponent {
  message: any;  // Make sure message$ is properly typed
  type: any;
  constructor(private alertService: AlertService) {
    console.log(this.alertService.message$);
    this.alertService.message$.subscribe(msg => {
      this.message = msg?.message;
      this.type = msg?.type;
    });
  }
}
