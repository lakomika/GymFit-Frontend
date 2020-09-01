import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {MatDialog} from '@angular/material/dialog';
import {EditTaxRateComponent} from './edit-tax-rate/edit-tax-rate.component';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent implements OnInit {
  taxRate: number;

  constructor(private companyService: CompanyService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.companyService.getTaxRate().subscribe(data => {
      this.taxRate = data;
    });
  }

  editTaxRate() {
    const dialogEditName = this.dialog.open(EditTaxRateComponent, {data: this.taxRate});
    dialogEditName.afterClosed().subscribe();
  }
}
