import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {OperationSuccessComponent} from '../../../../common/operation/operation-success/operation-success.component';
import {OperationErrorComponent} from '../../../../common/operation/operation-error/operation-error.component';
import {CompanyService} from '../../company.service';


@Component({
  selector: 'app-edit-tax-rate',
  templateUrl: './edit-tax-rate.component.html',
  styleUrls: ['./edit-tax-rate.component.css']
})
export class EditTaxRateComponent implements OnInit {
  isSuccessful: boolean;

  constructor(private companyService: CompanyService, @Inject(MAT_DIALOG_DATA) public taxRate: number,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  editTaxRate(taxRate) {
    this.companyService.updateTaxRate(taxRate).subscribe(
      result => {
        this.dialog.open(OperationSuccessComponent);
      },
      error => {
        this.dialog.open(OperationErrorComponent);
      }
    );
  }
}
