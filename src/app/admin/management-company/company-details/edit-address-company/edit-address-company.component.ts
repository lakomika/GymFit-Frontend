import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyDetails} from '../../CompanyDetails';
import {CompanyService} from '../../company.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {OperationSuccessComponent} from '../../../../common/operation/operation-success/operation-success.component';
import {OperationErrorComponent} from '../../../../common/operation/operation-error/operation-error.component';

@Component({
  selector: 'app-edit-address-company',
  templateUrl: './edit-address-company.component.html',
  styleUrls: ['./edit-address-company.component.css']
})
export class EditAddressCompanyComponent implements OnInit {

  formGroup: FormGroup;
  companyDetails: CompanyDetails = new CompanyDetails();

  constructor(@Inject(MAT_DIALOG_DATA) private companyDetailsInject: CompanyDetails,
              private companyService: CompanyService, private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.formGroup = formBuilder.group({
      street:
        [null, Validators.required],
      postcode:
        [null, Validators.compose([Validators.required, Validators.pattern('([0-9]{2})-[0-9]{3}')])],
      city:
        [null, Validators.compose([Validators.required])]
    })
    ;
  }

  ngOnInit(): void {
    this.companyDetails.street = this.companyDetailsInject.street;
    this.companyDetails.postcode = this.companyDetailsInject.postcode;
    this.companyDetails.city = this.companyDetailsInject.city;
    this.formGroup.get('street').setValue(this.companyDetails.street);
    this.formGroup.get('postcode').setValue(this.companyDetails.postcode);
    this.formGroup.get('city').setValue(this.companyDetails.city);
  }

  editAddress(companyDetails) {
    this.companyDetails = companyDetails;
    this.companyService.updateAddress(this.companyDetails).subscribe(
      result => {
        this.dialog.open(OperationSuccessComponent);
      },
      error => {
        this.dialog.open(OperationErrorComponent);
      }
    );
  }
}
