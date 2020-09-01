import {Component, OnInit} from '@angular/core';
import {UserService} from '../../common/_services/user.service';
import {UserApp} from '../../common/_helpers/UserApp';
import {Client} from '../../common/_helpers/Client';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {SuccessRegisterClientComponent} from './success-register-client/success-register-client.component';


@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  formGroup: FormGroup;
  userAppRequest: UserApp = new UserApp();
  isSignUpFailed = false;
  errorMessage = '';
  minYearOfBirth = new Date();
  maxYearOfBirth = new Date();

  constructor(private formBuilder: FormBuilder, private router: Router,
              private dialog: MatDialog, private userService: UserService) {
    this.userAppRequest.client = new Client();
    this.formGroup = formBuilder.group({
      name:
        [null, Validators.required],
      surname:
        [null, Validators.required],
      email:
        [null, Validators.compose([Validators.required, Validators.email])],
      phoneNumber:
        [null, Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')])],
      street:
        [null, Validators.compose([Validators.required])],
      postcode:
        [null, Validators.compose([Validators.required,
          Validators.pattern('([0-9]{2})-[0-9]{3}')])],
      city:
        [null, Validators.compose([Validators.required])],
      dateOfBirth:
        [null, Validators.required],
      username:
        [null, Validators.required],
      password:
        [null, Validators.compose([Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],
      recaptchaReactive: new FormControl(null, Validators.required)
    });
    this.minYearOfBirth.setFullYear(this.minYearOfBirth.getFullYear() - 100);
    this.maxYearOfBirth.setFullYear(this.maxYearOfBirth.getFullYear() - 15);
  }

  ngOnInit(): void {
  }

  addClient() {
    this.isSignUpFailed = false;
    this.userAppRequest.client.name = this.formGroup.get('name').value;
    this.userAppRequest.client.surname = this.formGroup.get('surname').value;
    this.userAppRequest.email = this.formGroup.get('email').value;
    this.userAppRequest.client.phoneNumber = this.formGroup.get('phoneNumber').value;
    this.userAppRequest.client.street = this.formGroup.get('street').value;
    this.userAppRequest.client.postcode = this.formGroup.get('postcode').value;
    this.userAppRequest.client.city = this.formGroup.get('city').value;
    this.userAppRequest.client.dateOfBirth = this.formGroup.get('dateOfBirth').value;
    this.userAppRequest.password = this.formGroup.get('password').value;
    this.userAppRequest.username = this.formGroup.get('username').value;
    this.userService.registerClient(this.userAppRequest).subscribe(data => {
        const dialogRef = this.dialog.open(SuccessRegisterClientComponent);
        dialogRef.afterClosed().subscribe(result => {
          window.location.reload();
        });
      },
      error => {
        this.isSignUpFailed = true;
        this.errorMessage = error.error.message;
      }
    );
  }
}
