import {Component, OnInit} from '@angular/core';
import {HistoryOfOrdersService} from '../history-of-orders.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-selected-invoice',
  templateUrl: './show-selected-invoice.component.html',
  styleUrls: ['./show-selected-invoice.component.css']
})
export class ShowSelectedInvoiceComponent implements OnInit {
  invoice: any;
  dataFetched = false;

  constructor(private historyOfOrdersService: HistoryOfOrdersService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const invoiceId = this.activatedRoute.snapshot.queryParamMap.get('invoiceId');
    this.historyOfOrdersService.getInvoiceById(invoiceId).subscribe(data => {
      this.invoice = data;
      this.dataFetched = true;
    });
  }

}
