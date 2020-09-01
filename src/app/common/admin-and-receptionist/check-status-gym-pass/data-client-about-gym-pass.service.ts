import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Url} from '../../_helpers/url';

const url = Url.getBackendAddress() + '/api/client/';

@Injectable({
  providedIn: 'root'
})
export class DataClientAboutGymPassService {

  constructor(private http: HttpClient) {
  }

  get(numberCard): Observable<any> {
    const params = new HttpParams()
      .set('numberCard', numberCard);
    return this.http.get(url + 'get-data-about-gym-pass', {params});
  }

}
