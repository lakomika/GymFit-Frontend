import {Component, OnInit} from '@angular/core';
import {HistoryOfOrdersService} from './history-of-orders.service';
import {PageEvent} from '@angular/material/paginator';
import {HistoryOfOrder, HistoryOfOrdersResponse} from './HistoryOfOrder';
import {MatDialog} from '@angular/material/dialog';
import {CancelTheOrderComponent} from './cancel-the-order/cancel-the-order.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-history-of-orders',
  templateUrl: './history-of-orders.component.html',
  styleUrls: ['./history-of-orders.component.css']
})
export class HistoryOfOrdersComponent implements OnInit {

  loading: boolean;
  totalElements = 0;
  invoices: HistoryOfOrder[] = [];
  userAppResponse: HistoryOfOrdersResponse;
  page = 0;
  size = 25;
  dataFetched = false;

  constructor(private historyOfOrdersService: HistoryOfOrdersService, private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getHistoryOfOrders({page: '0', size: '25'});
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
    this.getHistoryOfOrders(request);
  }

  showInvoice(invoiceId: number) {
    this.router.navigate(['client/history-of-orders/show-invoice'],
      {queryParams: {invoiceId}});
  }

  cancelTheOrder(invoice: HistoryOfOrder) {
    const dialogRef = this.dialog.open(CancelTheOrderComponent, {data: invoice});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  transferData(invoiceId: number) {
    this.router.navigate(['client/history-of-orders/transfer-data/'], {queryParams: {invoiceId}});
  }

  private getHistoryOfOrders(request) {
    this.loading = true;
    this.historyOfOrdersService.getPagingClientInvoices(request)
      .subscribe(data => {
        this.userAppResponse = data;
        this.invoices = this.userAppResponse.content;
        this.totalElements = this.userAppResponse.totalElements;
        this.loading = false;
        this.dataFetched = true;
      }, error => {
        this.loading = false;
      });
  }
}
