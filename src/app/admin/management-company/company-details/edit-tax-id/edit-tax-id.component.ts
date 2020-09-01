import {Component, Inject, OnInit} from '@angular/core';
import {CompanyDetails} from '../../CompanyDetails';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {CompanyService} from '../../company.service';
import {OperationSuccessComponent} from '../../../../common/operation/operation-success/operation-success.component';
import {OperationErrorComponent} from '../../../../common/operation/operation-error/operation-error.component';

@Component({
  selector: 'app-tax-id',
  templateUrl: './edit-tax-id.component.html',
  styleUrls: ['./edit-tax-id.component.css']
})
export class EditTaxIdComponent implements OnInit {
  isSuccessful: boolean;
  companyDetails: CompanyDetails = new CompanyDetails();

  constructor(@Inject(MAT_DIALOG_DATA) private companyDetailsInject: CompanyDetails,
              private companyService: CompanyService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.companyDetails.accountNumber = this.companyDetailsInject.accountNumber;
  }

  editAccountNumberCompany() {
    this.companyService.updateTaxId(this.companyDetails).subscribe(
      result => {
        this.dialog.open(OperationSuccessComponent);
      },
      error => {
        this.dialog.open(OperationErrorComponent);
      }
    );
  }
}
