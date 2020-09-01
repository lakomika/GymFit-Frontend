import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserApp} from '../../../_helpers/UserApp';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReceptionistService} from '../../../../admin/management-receptionist/receptionist.service';
import {OperationSuccessComponent} from '../../../operation/operation-success/operation-success.component';

@Component({
  selector: 'app-change-password-user',
  templateUrl: './change-password-user.component.html',
  styleUrls: ['./change-password-user.component.css']
})
export class ChangePasswordUserComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public userApp: UserApp,
              public dialogRef: MatDialogRef<ChangePasswordUserComponent>, private receptionistService: ReceptionistService,
              private dialog: MatDialog) {
    this.formGroup = formBuilder.group({
      password:
        [null, Validators.compose([Validators.required])],
    });

  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveChanges() {
    this.userApp.password = this.formGroup.get('password').value;
    this.receptionistService.changeSelectedPasswordReceptionist(this.userApp).subscribe();
    this.dialog.open(OperationSuccessComponent);
  }
}
