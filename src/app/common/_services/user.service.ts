import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Url} from '../_helpers/url';

const AUTH_API = Url.getBackendAddress() + '/api/auth/';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', credentials);
  }

  registerClient(userAppClientRequest): Observable<any> {
    return this.http.post(Url.getBackendAddress() + '/api/client/add-client-on-the-public-content',
      userAppClientRequest);
  }

  changePasswordByUser(data): Observable<any> {
    const params = new HttpParams()
      .set('oldPassword', data.oldPassword)
      .set('newPassword', data.newPassword);
    return this.http.put(Url.getBackendAddress() + '/api/user/change-password', params);
  }

  sendEmailWithTokenToResetPassword(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email);
    return this.http.post(Url.getBackendAddress() + '/api/password/send-email-to-reset-password', params);
  }

}
