import {Component, OnInit} from '@angular/core';
import {HistoryOfOrdersService} from '../history-of-orders.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-transfer-data',
  templateUrl: './transfer-data.component.html',
  styleUrls: ['./transfer-data.component.css']
})
export class TransferDataComponent implements OnInit {
  transferData: any;
  dataFetched = false;

  constructor(private historyOfOrdersService: HistoryOfOrdersService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const invoiceId = this.activatedRoute.snapshot.queryParamMap.get('invoiceId');
    this.historyOfOrdersService.getDataTransferByUnpaidInvoiceId(invoiceId).subscribe(data => {
      this.transferData = data;
      this.dataFetched = true;
    }, error => {
      console.log(error.error);
    });
  }

}
