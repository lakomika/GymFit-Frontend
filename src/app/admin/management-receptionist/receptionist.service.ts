import {Injectable} from '@angular/core';
import {Url} from '../../common/_helpers/url';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


const urlApiReceptionist = Url.getBackendAddress() + '/api/receptionist/';

const urlApiUserApp = Url.getBackendAddress() + '/api/user/';


@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  constructor(private http: HttpClient) {
  }

  addReceptionist(userApp): Observable<any> {
    return this.http.post(urlApiReceptionist + 'add-receptionist', userApp);
  }

  getReceptionistsByStatus(pageSetUp): Observable<any> {
    const params = pageSetUp;
    return this.http.get(urlApiReceptionist + 'get-receptionists-by-status', {params});
  }

  changeSelectedPasswordReceptionist(userApp): Observable<any> {
    const params = new HttpParams()
      .set('idReceptionist', userApp.id)
      .set('updatePassword', userApp.password);
    return this.http.put(urlApiUserApp + 'change-password-receptionist', params);
  }


  deactivationAccountReceptionist(userApp): Observable<any> {
    const params = new HttpParams()
      .set('idReceptionistRequest', userApp.id);
    return this.http.put(urlApiUserApp + 'deactivation-account-receptionist', params);
  }


}
