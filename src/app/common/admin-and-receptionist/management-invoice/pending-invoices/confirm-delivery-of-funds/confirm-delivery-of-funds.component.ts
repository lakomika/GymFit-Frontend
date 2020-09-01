import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {HistoryOfOrder} from '../../../../../client/history-of-orders/HistoryOfOrder';
import {PendingInvoicesService} from '../pending-invoices.service';

@Component({
  selector: 'app-confirm-delivery-of-funds',
  templateUrl: './confirm-delivery-of-funds.component.html',
  styleUrls: ['./confirm-delivery-of-funds.component.css']
})
export class ConfirmDeliveryOfFundsComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public historyOfOrder: HistoryOfOrder,
              private historyOfOrdersService: PendingInvoicesService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  confirmDeliveryOfFunds() {
    this.historyOfOrdersService.confirm(this.historyOfOrder.id).subscribe(data => {
      window.location.reload();
    }, error => {
    });


  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
