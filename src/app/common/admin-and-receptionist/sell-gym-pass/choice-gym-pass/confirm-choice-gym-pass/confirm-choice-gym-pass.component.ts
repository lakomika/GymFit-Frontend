import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {OperationSuccessComponent} from '../../../../operation/operation-success/operation-success.component';
import {Router} from '@angular/router';
import {BuyGymMembershipService} from '../../../../../client/buy-gym-membership/buy-gym-membership.service';

@Component({
  selector: 'app-confirm-choice-gym-pass',
  templateUrl: './confirm-choice-gym-pass.component.html',
  styleUrls: ['./confirm-choice-gym-pass.component.css']
})
export class ConfirmChoiceGymPassComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dataRequest: any,
              private buyGymMembershipService: BuyGymMembershipService, public dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
  }

  confirmTheOrder() {
    this.buyGymMembershipService.saveInvoice(this.dataRequest.gymMembershipId, this.dataRequest.numberCard).subscribe(data => {
      this.dialog.closeAll();
      this.dialog.open(OperationSuccessComponent, {
        data: {
          message: 'Karnet został sprzedany.',
          routeLink: '/admin-and-receptionist/management-client/sell-gym-pass'
        }
      });
    }, error => {
    });

  }

  closeDialog() {
    this.dialog.closeAll();
  }

}

