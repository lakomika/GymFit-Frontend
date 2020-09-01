import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {CancelTheOrderComponent} from '../../../../client/history-of-orders/cancel-the-order/cancel-the-order.component';
import {PendingInvoicesService} from './pending-invoices.service';
import {PendingInvoice, PendingInvoiceResponse} from './PendingInvoice';
import {ConfirmDeliveryOfFundsComponent} from './confirm-delivery-of-funds/confirm-delivery-of-funds.component';

@Component({
  selector: 'app-pending-invoices',
  templateUrl: './pending-invoices.component.html',
  styleUrls: ['./pending-invoices.component.css']
})
export class PendingInvoicesComponent implements OnInit {

  loading: boolean;
  totalElements = 0;
  invoices: PendingInvoice[] = [];
  pendingInvoiceResponse: PendingInvoiceResponse;
  page = 0;
  size = 25;
  dataFetched = false;

  constructor(private pendingInvoicesService: PendingInvoicesService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getPendingInvoices({page: '0', size: '25'});
  }

  changePage(event: PageEvent) {
    const request = {
      page: undefined,
      size: undefined
    };
    request.page = event.pageIndex.toString();
    request.size = event.pageSize.toString();
    this.page = request.page;
    this.size = request.size;
    this.getPendingInvoices(request);
  }

  cancelTheOrder(invoice: PendingInvoice) {
    const dialogRef = this.dialog.open(CancelTheOrderComponent, {data: invoice});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  confirmDeliveryOdFunds(invoice: PendingInvoice) {
    const dialogRef = this.dialog.open(ConfirmDeliveryOfFundsComponent, {data: invoice});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  private getPendingInvoices(request) {
    this.loading = true;
    this.pendingInvoicesService.get(request)
      .subscribe(data => {
        this.pendingInvoiceResponse = data;
        this.invoices = this.pendingInvoiceResponse.content;
        this.totalElements = this.pendingInvoiceResponse.totalElements;
        this.loading = false;
        this.dataFetched = true;
      }, error => {
        this.loading = false;
      });
  }
}
