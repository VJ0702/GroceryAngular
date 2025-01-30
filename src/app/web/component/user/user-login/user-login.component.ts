import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserLogInRequestModel } from '../../../../models/auth/user-log-in-request-model';
import { UserAuthService } from '../../../../services/user-auth.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnDestroy {
  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };
  userLoginModel: UserLogInRequestModel;
  constructor(private authService: UserAuthService) {
    this.userLoginModel = {
      username: '',
      password: ''
    };
  }
  private getAuthSubscription?: Subscription;
  authResponse: any;
  loading: boolean = true; // Loader flag
  errorMessage: string | null = null; // Error message if API fails

  onSubmit() {
    this.userLoginModel.username = this.loginData.email;
    this.userLoginModel.password = this.loginData.password;
    console.log(this.userLoginModel);

    this.authService.userLogin(this.userLoginModel).subscribe(
      (data) => {
        console.log(data);
        this.authResponse = data; // Bind fetched details
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to login.';
        console.error(error);
        this.loading = false;
      }
    );
  };
  ngOnDestroy(): void {
    this.getAuthSubscription?.unsubscribe();
  }
}
