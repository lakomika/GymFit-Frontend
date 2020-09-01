import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserApp} from '../../../_helpers/UserApp';
import {MatDialog} from '@angular/material/dialog';
import {ClientService} from '../client.service';
import {Client} from '../../../_helpers/Client';
import {SuccessOfAddingClientComponent} from './success-of-adding-client/success-of-adding-client.component';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  formGroup: FormGroup;
  userApp: UserApp = new UserApp();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  minDate = new Date();
  maxDate = new Date();

  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog, private clientService: ClientService) {
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
        [null, Validators.compose([Validators.required])],
      dateOfBirth:
        [null, Validators.required]
    });
    this.minDate.setDate(this.minDate.getDate() - 36500);
    this.maxDate.setDate(this.maxDate.getDate() + -5340);
  }

  ngOnInit(): void {
  }

  addReceptionist() {
    this.userApp.client.name = this.formGroup.get('name').value;
    this.userApp.client.surname = this.formGroup.get('surname').value;
    this.userApp.email = this.formGroup.get('email').value;
    this.userApp.client.phoneNumber = this.formGroup.get('phoneNumber').value;
    this.userApp.client.street = this.formGroup.get('street').value;
    this.userApp.client.postcode = this.formGroup.get('postcode').value;
    this.userApp.client.city = this.formGroup.get('city').value;
    this.userApp.client.dateOfBirth = this.formGroup.get('dateOfBirth').value;
    this.clientService.addClient(this.userApp).subscribe(data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.userApp.username = data.username;
        this.userApp.password = data.password;
        this.userApp.client.numberCard = data.numberCard;
        const dialogRef = this.dialog.open(SuccessOfAddingClientComponent, {
          data: this.userApp, autoFocus: false,
          maxHeight: '90vh'
        });
        dialogRef.afterClosed().subscribe(result => {
          window.location.reload();
        });
      },
      error => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );

  }
}
