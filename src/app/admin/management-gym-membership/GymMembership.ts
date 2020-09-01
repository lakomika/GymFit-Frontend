export interface GymMembershipListResponse {
  content: GymMembership[];
  totalElements: number;
}

export class GymMembership {
  id: number;
  name: string;
  priceMonthGross: number;
  priceTotalGross: number;
  taxRatePercent: number;
  numberOfMonths: number;
  typeOfMembership: string;
}
