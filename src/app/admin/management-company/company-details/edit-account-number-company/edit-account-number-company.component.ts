import {Component, Inject, OnInit} from '@angular/core';
import {CompanyDetails} from '../../CompanyDetails';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {CompanyService} from '../../company.service';
import {OperationSuccessComponent} from '../../../../common/operation/operation-success/operation-success.component';
import {OperationErrorComponent} from '../../../../common/operation/operation-error/operation-error.component';

@Component({
  selector: 'app-edit-account-number-company',
  templateUrl: './edit-account-number-company.component.html',
  styleUrls: ['./edit-account-number-company.component.css']
})
export class EditAccountNumberCompanyComponent implements OnInit {
  isSuccessful: boolean;
  companyDetails: CompanyDetails = new CompanyDetails();

  constructor(@Inject(MAT_DIALOG_DATA) private companyDetailsInject: CompanyDetails,
              private companyService: CompanyService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.companyDetails.accountNumber = this.companyDetailsInject.accountNumber;
  }

  editAccountNumberCompany() {
    this.companyService.updateAccountNumber(this.companyDetails).subscribe(
      result => {
        this.dialog.open(OperationSuccessComponent);
      },
      error => {
        this.dialog.open(OperationErrorComponent);
      }
    );
  }
}
