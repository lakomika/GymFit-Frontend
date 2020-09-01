export interface PendingInvoiceResponse {
  content: PendingInvoice[];
  totalElements: number;
}

export class PendingInvoice {
  id: number;
  plannedStartOfThePass: Date;
  name: string;
  surname: string;
  typeOfTransaction: string;
}
