import {Injectable} from '@angular/core';
import {Url} from '../../../_helpers/url';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const url = Url.getBackendAddress() + '/api/invoice/';

@Injectable({
  providedIn: 'root'
})
export class PendingInvoicesService {

  constructor(private http: HttpClient) {
  }

  get(pageSetUp): Observable<any> {
    const params = pageSetUp;
    return this.http.get(url + 'pending-invoices', {params});
  }

  confirm(id): Observable<any> {
    const params = new HttpParams()
      .set('orderIdRequest', id);
    return this.http.put(url + 'history-of-orders/confirm-delivery-of-funds', params);
  }

}
