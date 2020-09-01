import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserApp} from '../../../_helpers/UserApp';
import {ReceptionistService} from '../../../../admin/management-receptionist/receptionist.service';
import {OperationSuccessComponent} from '../../../operation/operation-success/operation-success.component';

@Component({
  selector: 'app-deactivation-account-user',
  templateUrl: './deactivation-account-user.component.html',
  styleUrls: ['./deactivation-account-user.component.css']
})
export class DeactivationAccountUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public userApp: UserApp,
              public dialogRef: MatDialogRef<DeactivationAccountUserComponent>, private receptionistService: ReceptionistService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  deactivation() {
    this.receptionistService.deactivationAccountReceptionist(this.userApp).subscribe();
    this.dialog.open(OperationSuccessComponent);
  }
}
