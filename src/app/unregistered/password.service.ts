import {Injectable} from '@angular/core';
import {Url} from '../common/_helpers/url';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

const url = Url.getBackendAddress() + '/api/password/';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http: HttpClient) {
  }

  isTokenExist(data): Observable<any> {
    const params = new HttpParams()
      .set('token', data.token);
    return this.http.get(url + 'is-token-exist', {params});
  }

  setNewPasswordByPublicContent(data): Observable<any> {
    const params = new HttpParams()
      .set('token', data.token)
      .set('newPassword', data.newPassword);
    console.log(params);
    return this.http.post(url + 'reset-password', params);
  }
}
