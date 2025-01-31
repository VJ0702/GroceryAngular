import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AlertType = 'success' | 'danger' | 'warning';

export interface AlertMessage {
  type: AlertType;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private messageSource = new BehaviorSubject<AlertMessage | null>(null);
  message$ = this.messageSource;

  showMessage(message: string, type: AlertType = 'success') {
    this.messageSource.next({ type, message });
    setTimeout(() => this.clearMessage(), 3000); // Auto-clear after 3 seconds
  }

  clearMessage() {
    this.messageSource.next(null);
  }
}