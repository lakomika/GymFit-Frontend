import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {GymMembership} from '../../GymMembership';
import {GymMembershipService} from '../../gym-membership.service';
import {OperationSuccessComponent} from '../../../../common/operation/operation-success/operation-success.component';

@Component({
  selector: 'app-confirmation-deactivating-gym-membership',
  templateUrl: './confirmation-deactivating-gym-membership.component.html',
  styleUrls: ['./confirmation-deactivating-gym-membership.component.css']
})
export class ConfirmationDeactivatingGymMembershipComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public gymMembership: GymMembership,
              private gymMembershipService: GymMembershipService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  deactivationGymMembership() {
    this.gymMembershipService.deactivationGymMembership(this.gymMembership).subscribe(data => {
    }, error => {
    });
    const dialog = this.dialog.open(OperationSuccessComponent);
    dialog.afterClosed().subscribe();

  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
