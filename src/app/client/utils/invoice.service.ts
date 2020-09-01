import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InvoiceCreate} from './InvoiceCreate';
import {Url} from '../../common/_helpers/url';
import {Observable} from 'rxjs';

const url = Url.getBackendAddress() + '/api/invoice/';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) {
  }

  buyGymPassByClient(invoiceCreate: InvoiceCreate): Observable<any> {
    return this.http.post(url + 'buy-gym-pass-by-client', invoiceCreate);
  }
}
