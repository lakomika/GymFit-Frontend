import {Component, OnInit} from '@angular/core';
import {CompanyDetails} from '../CompanyDetails';
import {MatDialog} from '@angular/material/dialog';
import {CompanyService} from '../company.service';
import {EditNameCompanyComponent} from './edit-name-company/edit-name-company.component';
import {EditAccountNumberCompanyComponent} from './edit-account-number-company/edit-account-number-company.component';
import {EditAddressCompanyComponent} from './edit-address-company/edit-address-company.component';
import {EditTaxIdComponent} from './edit-tax-id/edit-tax-id.component';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companyDetails: CompanyDetails;

  constructor(private companyService: CompanyService, public dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.companyService.getCompanyDetails().subscribe(companyDetails => {
      this.companyDetails = companyDetails;
    });
  }


  editName() {
    const dialogEditName = this.dialog.open(EditNameCompanyComponent, {data: this.companyDetails});
    dialogEditName.afterClosed().subscribe();
  }

  editAccountNumber() {
    const dialogEditName = this.dialog.open(EditAccountNumberCompanyComponent, {data: this.companyDetails});
    dialogEditName.afterClosed().subscribe();
  }

  editAddress() {
    const dialogEditName = this.dialog.open(EditAddressCompanyComponent, {data: this.companyDetails});
    dialogEditName.afterClosed().subscribe();
  }


  editTaxId() {
    const dialogEditName = this.dialog.open(EditTaxIdComponent, {data: this.companyDetails});
    dialogEditName.afterClosed().subscribe();
  }
}
