import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {OperationSuccessComponent} from '../../operation/operation-success/operation-success.component';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  formGroup: FormGroup;
  message: string;
  isFailed = false;
  errorMessage: string;


  constructor(private formBuilder: FormBuilder, private authService: UserService, private dialog: MatDialog) {
    this.formGroup = formBuilder.group({
      oldPassword:
        [null, Validators.compose([Validators.required])],
      newPassword:
        [null, Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ])],
      newPasswordConfirm:
        [null, Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ])],

    });

  }

  ngOnInit(): void {
  }


  saveChanges(value: any) {
    if (value.newPassword !== value.newPasswordConfirm) {
      this.isFailed = true;
      this.errorMessage = 'Hasła nie są takie same';
    } else {
      this.authService.changePasswordByUser(value).subscribe(data => {
        console.log('dsadsasdaasdsda');
        const dialogRef = this.dialog.open(OperationSuccessComponent);
        dialogRef.afterClosed().subscribe(result => {
        });
      }, error => {
        this.isFailed = true;
        this.errorMessage = 'Stare hasło nie jest poprawne';
      });
    }
  }
}
