import {Injectable} from '@angular/core';
import {GymMembership} from '../../admin/management-gym-membership/GymMembership';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Url} from '../../common/_helpers/url';
import {Observable} from 'rxjs';


const urlInvoice = Url.getBackendAddress() + '/api/invoice/';
const urlClient = Url.getBackendAddress() + '/api/client/';
const urlGymPass = Url.getBackendAddress() + '/api/gym-membership/';

@Injectable({
  providedIn: 'root'
})
export class BuyGymMembershipService {

  private gymMembership: GymMembership = new GymMembership();

  constructor(private http: HttpClient) {
  }

  isPendingInvoice(): Observable<any> {
    return this.http.get(urlInvoice + 'is-pending-invoice');
  }

  isPendingInvoiceByNumberCard(numberCard): Observable<any> {
    return this.http.get(urlInvoice + 'is-pending-invoice-by-number-card');
  }

  saveInvoice(gymMembershipId, numberCard): Observable<any> {
    const params = new HttpParams()
      .set('gymMembershipId', gymMembershipId)
      .set('numberCard', numberCard);
    return this.http.post(urlInvoice + 'save-invoice', params);
  }

  getDateOfEndGymPass(): Observable<any> {
    return this.http.get(urlClient + 'get-date-of-end-gym-pass');
  }

  getActiveGymPassById(id): Observable<any> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.get(urlGymPass + 'get-active-gym-pass-by-id', {params});
  }

}
