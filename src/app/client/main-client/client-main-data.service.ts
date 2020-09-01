import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Url} from '../../common/_helpers/url';


const url = Url.getBackendAddress() + '/api/client/';

@Injectable({
  providedIn: 'root'
})
export class ClientMainDataService {

  constructor(private http: HttpClient) {
  }


  get(): Observable<any> {
    return this.http.get(url + 'get-client-basic-data');
  }
}
