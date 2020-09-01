import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Url} from '../../common/_helpers/url';
import {Observable} from 'rxjs';

const url = Url.getBackendAddress() + '/api/invoice/';

@Injectable({
  providedIn: 'root'
})
export class HistoryOfOrdersService {

  constructor(private http: HttpClient) {
  }

  getPagingClientInvoices(pageSetUp): Observable<any> {
    const params = pageSetUp;
    return this.http.get(url + 'history-of-orders', {params});
  }

  cancellation(id): Observable<any> {
    const params = new HttpParams()
      .set('orderIdRequest', id);
    return this.http.put(url + 'history-of-orders/cancellation-order', params);
  }

  getInvoiceById(id): Observable<any> {
    const params = new HttpParams()
      .set('invoiceId', id);
    return this.http.get(url + 'invoice-paid', {params});
  }

  getDataTransferByUnpaidInvoiceId(id): Observable<any> {
    const params = new HttpParams()
      .set('invoiceId', id);
    return this.http.get(url + 'data-transfer', {params});
  }
}
