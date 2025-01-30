import { Injectable } from '@angular/core';
import { UserLogInRequestModel } from '../models/auth/user-log-in-request-model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private apiService: ApiService) { }

  private loginEndpoint = 'api/Auth/login';

  userLogin(userLogInRequestModel: UserLogInRequestModel): Observable<any> {
    return this.apiService.post<any>(this.loginEndpoint, userLogInRequestModel);
  }
}
