import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PasswordService} from '../password.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OperationSuccessComponent} from '../../common/operation/operation-success/operation-success.component';
import {OperationErrorComponent} from '../../common/operation/operation-error/operation-error.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  formGroup: FormGroup;
  token: string;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
              private passwordService: PasswordService, private router: Router,
              private dialog: MatDialog) {
    this.formGroup = formBuilder.group({
      newPassword:
        [null, Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ])],
      newPasswordConfirm:
        [null, Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ])],

    });
  }

  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.params.token;
    this.passwordService.isTokenExist(this.activatedRoute.snapshot.params).subscribe(data => {
    }, error => {
      this.router.navigate(['/home']);
    });

  }

  saveChanges(value: any) {
    value.token = this.token;
    this.passwordService.setNewPasswordByPublicContent(value).subscribe(data => {
      this.dialog.open(OperationSuccessComponent, {
        data: {
          message: 'Hasło zostało zmienione.',
          routeLink: '/login'
        }
      });
    }, error => {
      this.dialog.open(OperationErrorComponent, {data: {message: 'Hasło nie zostało zmienione.'}});
    });
  }
}
