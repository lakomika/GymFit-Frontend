import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {CompanyDetails} from '../../CompanyDetails';
import {CompanyService} from '../../company.service';
import {OperationSuccessComponent} from '../../../../common/operation/operation-success/operation-success.component';
import {OperationErrorComponent} from '../../../../common/operation/operation-error/operation-error.component';

@Component({
  selector: 'app-edit-name-company',
  templateUrl: './edit-name-company.component.html',
  styleUrls: ['./edit-name-company.component.css']
})
export class EditNameCompanyComponent implements OnInit {
  isSuccessful: boolean;
  companyDetails: CompanyDetails = new CompanyDetails();

  constructor(@Inject(MAT_DIALOG_DATA) private companyDetailsInject: CompanyDetails,
              private companyService: CompanyService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.companyDetails.name = this.companyDetailsInject.name;
  }

  editNameCompany() {
    this.companyService.updateCompanyName(this.companyDetails).subscribe(
      result => {
        this.dialog.open(OperationSuccessComponent);
      },
      error => {
        this.dialog.open(OperationErrorComponent);
      }
    );
  }
}
