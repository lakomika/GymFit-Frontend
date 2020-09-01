import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserApp} from '../../../common/_helpers/UserApp';
import {MatDialog} from '@angular/material/dialog';
import {Client} from '../../../common/_helpers/Client';
import {ClientService} from '../../utils/client.service';
import {Router} from '@angular/router';
import {SuccessEditProfileClientComponent} from './success-edit-profile-client/success-edit-profile-client.component';

@Component({
  selector: 'app-my-profile-client',
  templateUrl: './my-profile-client.component.html',
  styleUrls: ['./my-profile-client.component.css']
})
export class MyProfileClientComponent implements OnInit {
  formGroup: FormGroup;
  userApp: UserApp = new UserApp();
  isSuccessful = false;
  isOperationFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog, private clientService: ClientService, private router: Router) {
    this.userApp.client = new Client();
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
        [null, Validators.compose([Validators.required, Validators.pattern('([0-9]{2})-[0-9]{3}')])],
      city:
        [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    this.clientService.getProfile().subscribe(data => {
      this.userApp.client = data;
      this.userApp.email = data.email;
      this.formGroup.patchValue({
        name: this.userApp.client.name,
        surname: this.userApp.client.surname,
        street: this.userApp.client.street,
        postcode: this.userApp.client.postcode,
        phoneNumber: this.userApp.client.phoneNumber,
        city: this.userApp.client.city,
        email: this.userApp.email
      });
    });
  }

  editData() {
    this.userApp.client.name = this.formGroup.get('name').value;
    this.userApp.client.surname = this.formGroup.get('surname').value;
    this.userApp.email = this.formGroup.get('email').value;
    this.userApp.client.phoneNumber = this.formGroup.get('phoneNumber').value;
    this.userApp.client.street = this.formGroup.get('street').value;
    this.userApp.client.postcode = this.formGroup.get('postcode').value;
    this.userApp.client.city = this.formGroup.get('city').value;
    console.log(this.userApp);
    this.clientService.editClientData(this.userApp).subscribe(data => {
        const dialogRef = this.dialog.open(SuccessEditProfileClientComponent, {data: this.userApp});
        dialogRef.afterClosed().subscribe(result => {
          this.router.navigate(['/client/main']);
        });

      },
      error => {
        this.errorMessage = error.error.message;
        this.isOperationFailed = true;
      }
    );

  }
}
