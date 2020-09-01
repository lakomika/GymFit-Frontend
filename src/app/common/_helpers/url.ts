import {environment} from '../../../environments/environment';

export class Url {

  static getBackendAddress(): string {
    if (environment.production) {
      return 'https://lakomika-api-gym-fit.herokuapp.com';
    } else {
      return 'http://localhost:8083';
    }
  }
}
