export interface ReceptionistResponse {
  content: Receptionist[];
  totalElements: number;
}

export class Receptionist {
  name: string;
  surname: string;
  phoneNumber: number;
  street: string;
  postcode: string;
  city: string;
}
