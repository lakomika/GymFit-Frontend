export interface HistoryOfOrdersResponse {
  content: HistoryOfOrder[];
  totalElements: number;
}

export class HistoryOfOrder {
  id: number;
  plannedStartOfThePass: Date;
  startOfThePass: Date;
  endOfThePass: Date;
  status: string;
  typeOfTransaction: string;
}
