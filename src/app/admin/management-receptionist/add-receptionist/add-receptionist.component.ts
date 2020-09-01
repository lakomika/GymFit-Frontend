import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Receptionist} from '../Receptionist';
import {MatDialog} from '@angular/material/dialog';
import {ReceptionistService} from '../receptionist.service';
import {UserApp} from '../../../common/_helpers/UserApp';
import {SuccessOfAddingReceptionistComponent} from './success-of-adding-receptionist/success-of-adding-receptionist.component';

@Component({
  selector: 'app-add-receptionist',
  templateUrl: './add-receptionist.component.html',
  styleUrls: ['./add-receptionist.component.css']
})
export class AddReceptionistComponent implements OnInit {
  formGroup: FormGroup;
  userApp: UserApp = new UserApp();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog, private receptionistService: ReceptionistService) {
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
  }

  addReceptionist() {
    this.userApp.receptionist = new Receptionist();
    this.userApp.receptionist.name = this.formGroup.get('name').value;
    this.userApp.receptionist.surname = this.formGroup.get('surname').value;
    this.userApp.email = this.formGroup.get('email').value;
    this.userApp.receptionist.phoneNumber = this.formGroup.get('phoneNumber').value;
    this.userApp.receptionist.street = this.formGroup.get('street').value;
    this.userApp.receptionist.postcode = this.formGroup.get('postcode').value;
    this.userApp.receptionist.city = this.formGroup.get('city').value;
    this.receptionistService.addReceptionist(this.userApp).subscribe(data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.userApp.username = data.username;
        this.userApp.password = data.password;
        const dialogRef = this.dialog.open(SuccessOfAddingReceptionistComponent, {data: this.userApp});
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
