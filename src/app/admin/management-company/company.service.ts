import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Url} from '../../common/_helpers/url';
import {CompanyDetails} from './CompanyDetails';

const urlManagementCompany = Url.getBackendAddress() + '/api/management-company/';

const urlTax = Url.getBackendAddress() + '/api/tax/';

@Injectable({
  providedIn: 'root'
})


export class CompanyService {

  constructor(private http: HttpClient) {
  }


  getCompanyDetails(): Observable<any> {
    return this.http.get(urlManagementCompany + 'company-details');
  }

  updateCompanyName(companyDetails): Observable<any> {
    const params = new HttpParams()
      .set('updateName', companyDetails.name);
    return this.http.put(urlManagementCompany + 'change-name', params);
  }

  updateAccountNumber(companyDetails: CompanyDetails) {
    const params = new HttpParams()
      .set('updateAccountNumber', companyDetails.accountNumber);
    return this.http.put(urlManagementCompany + 'change-account-number', params);
  }

  updateAddress(companyDetails: CompanyDetails) {
    const params = new HttpParams()
      .set('updateStreet', companyDetails.street)
      .set('updatePostcode', companyDetails.postcode)
      .set('updateCity', companyDetails.city);
    return this.http.put(urlManagementCompany + 'change-address', params);
  }

  updateTaxId(companyDetails: CompanyDetails) {
    const params = new HttpParams()
      .set('updateTaxId', companyDetails.taxId);
    return this.http.put(urlManagementCompany + 'change-tax-id', params);
  }

  getTaxRate(): Observable<any> {
    return this.http.get(urlTax);
  }

  updateTaxRate(taxRate): Observable<any> {
    const params = new HttpParams()
      .set('newTaxRateValue', taxRate);
    return this.http.post(urlTax + 'update-tax-rate-value', params);
  }
}
