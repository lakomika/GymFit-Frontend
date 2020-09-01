import {Client} from '../../common/_helpers/Client';

export interface InvoiceCreateResponse {
  content: InvoiceCreate[];
  totalElements: number;
}

export class InvoiceCreate {
  id: number;
  client: Client = new Client();
  plannedStartOfThePass: Date;
  gymMembershipId: number;
}
