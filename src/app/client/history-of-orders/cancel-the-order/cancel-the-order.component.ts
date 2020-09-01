import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {OperationSuccessComponent} from '../../../common/operation/operation-success/operation-success.component';
import {HistoryOfOrder} from '../HistoryOfOrder';
import {HistoryOfOrdersService} from '../history-of-orders.service';

@Component({
  selector: 'app-cancel-the-order',
  templateUrl: './cancel-the-order.component.html',
  styleUrls: ['./cancel-the-order.component.css']
})
export class CancelTheOrderComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public historyOfOrder: HistoryOfOrder,
              private historyOfOrdersService: HistoryOfOrdersService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  cancelTheOrder() {
    this.historyOfOrdersService.cancellation(this.historyOfOrder.id).subscribe(data => {
    }, error => {
    });
    const dialog = this.dialog.open(OperationSuccessComponent);
    dialog.afterClosed().subscribe();

  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
