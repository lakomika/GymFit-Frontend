import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../common/_services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {OperationSuccessComponent} from '../../common/operation/operation-success/operation-success.component';
import {OperationErrorComponent} from '../../common/operation/operation-error/operation-error.component';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: UserService,
              private dialog: MatDialog) {
    this.formGroup = formBuilder.group({
      email:
        [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit(): void {
  }

  sendEmail(value: any) {
    this.authService.sendEmailWithTokenToResetPassword(value).subscribe(data => {
      this.dialog.open(OperationSuccessComponent, {data: {message: 'Wysłano maila z przypomnieniem hasła.'}});
    }, error => {
      this.dialog.open(OperationErrorComponent, {data: {message: 'Podano nieprawidłowy email.'}});
    });
  }
}
