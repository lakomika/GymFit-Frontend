import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Url} from '../../common/_helpers/url';

const url = Url.getBackendAddress() + '/api/gym-membership/';

@Injectable({
  providedIn: 'root'
})


export class GymMembershipService {

  constructor(private http: HttpClient) {
  }

  addGymMembership(gymMembership): Observable<any> {
    return this.http.post(url + 'add-gym-membership', gymMembership);
  }

  getGymMembershipsByStatus(pageSetUp): Observable<any> {
    const params = pageSetUp;
    return this.http.get(url + 'active-gym-memberships', {params});
  }

  inactiveGymMemberships(pageSetUp): Observable<any> {
    const params = pageSetUp;
    return this.http.get(url + 'inactive-gym-memberships', {params});
  }

  deactivationGymMembership(gymMembership): Observable<any> {
    const params = new HttpParams()
      .set('gymMembershipIdRequest', gymMembership.id);
    return this.http.put(url + 'deactivation-gym-membership', params);
  }

}
