import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserApp} from '../../../../_helpers/UserApp';
import {OperationSuccessComponent} from '../../../../operation/operation-success/operation-success.component';
import {ClientService} from '../../client.service';

@Component({
  selector: 'app-deactivation-client-dialog',
  templateUrl: './deactivation-client-dialog.component.html',
  styleUrls: ['./deactivation-client-dialog.component.css']
})
export class DeactivationClientDialogComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public userApp: UserApp,
              public dialogRef: MatDialogRef<DeactivationClientDialogComponent>, private clientService: ClientService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  deactivation() {
    this.clientService.deactivationAccountClient(this.userApp).subscribe();
    this.dialog.open(OperationSuccessComponent);
  }
}
