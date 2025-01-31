import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserLogInRequestModel } from '../../../../models/auth/user-log-in-request-model';
import { UserAuthService } from '../../../../services/user-auth.service';
import { AlertService } from '../../../../services/common-services/alert.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnDestroy {

  loginForm: FormGroup;
  loginError: string = ''; // Store error message on login failure

  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };
  userLoginModel: UserLogInRequestModel;
  constructor(private fb: FormBuilder, private authService: UserAuthService, private alertService: AlertService) {
    // Initialize form with validation
    this.loginForm = this.fb.group({
      //email: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false], // Optional
    });

    this.userLoginModel = {
      username: '',
      password: ''
    };
  }
  private getAuthSubscription?: Subscription;
  authResponse: any;
  loading: boolean = true; // Loader flag
  errorMessage: string | null = null; // Error message if API fails

  // // Convenience getter for form controls
  // get f() {
  //   return this.loginForm.controls;
  // }
  // Convenience getter for form controls (use bracket notation)
  get f() {
    return this.loginForm.controls as { [key: string]: any }; // ✅ Fix TypeScript error
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.userLoginModel.username = this.loginForm.value.email;
    this.userLoginModel.password = this.loginForm.value.password;
    console.log(this.userLoginModel);

    this.authService.userLogin(this.userLoginModel).subscribe(
      (data) => {
        this.alertService.showMessage('Login Successful 🎉', 'success');
        console.log(data);
        this.authResponse = data; // Bind fetched details
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to login.';
        this.loading = false;
        this.alertService.showMessage(error.error.message, 'danger');
      }
    );
  };
  ngOnDestroy(): void {
    this.getAuthSubscription?.unsubscribe();
  }
}
