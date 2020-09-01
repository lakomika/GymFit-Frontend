import {Injectable} from '@angular/core';
import {Url} from '../../common/_helpers/url';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserApp} from '../../common/_helpers/UserApp';

const url = Url.getBackendAddress() + '/api/client/';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getPersonalData(): Observable<any> {
    return this.http.get(url + 'get-personal-data');
  }

  getNumberAccessCard(): Observable<any> {
    return this.http.get(url + 'get-number-access-card');
  }

  getProfile(): Observable<any> {
    return this.http.get(url + 'get-client-profile');
  }


  editClientData(editUserAppData: UserApp): Observable<any> {
    const params = new HttpParams()
      .set('email', editUserAppData.email)
      .set('name', editUserAppData.client.name)
      .set('surname', editUserAppData.client.surname)
      .set('phoneNumber', editUserAppData.client.phoneNumber)
      .set('street', editUserAppData.client.street)
      .set('postcode', editUserAppData.client.postcode)
      .set('city', editUserAppData.client.city);
    return this.http.put(url + 'edit-client-data', params);
  }


}
