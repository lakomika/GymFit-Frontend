import {Injectable} from '@angular/core';
import {Url} from '../../_helpers/url';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserApp} from '../../_helpers/UserApp';

const url = Url.getBackendAddress() + '/api/client/';
const urlApiUserApp = Url.getBackendAddress() + '/api/user/';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  addClient(hall): Observable<any> {
    return this.http.post(url + 'add-client', hall);
  }

  getClientsByStatus(pageSetUp): Observable<any> {
    const params = pageSetUp;
    return this.http.get(url + 'get-clients-by-status', {params});
  }

  deactivationAccountClient(userApp: UserApp): Observable<any> {
    const params = new HttpParams()
      .set('idClientRequest', String(userApp.id));
    return this.http.put(urlApiUserApp + 'deactivation-account-client', params);
  }
}
