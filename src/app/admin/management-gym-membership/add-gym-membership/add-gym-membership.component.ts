import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {GymMembership} from '../GymMembership';
import {GymMembershipService} from '../gym-membership.service';
import {OperationErrorComponent} from '../../../common/operation/operation-error/operation-error.component';
import {SuccessOfAddedGymMembershipComponent} from './success-of-added-gym-membership/success-of-added-gym-membership.component';

@Component({
  selector: 'app-add-gym-membership',
  templateUrl: './add-gym-membership.component.html',
  styleUrls: ['./add-gym-membership.component.css']
})
export class AddGymMembershipComponent implements OnInit {

  formGroup: FormGroup;
  gymMembership: GymMembership = new GymMembership();
  gymMembershipPriceMonthGrossWithPoint: string;
  priceTotalGrossShown: any;
  defaultTypeofMembership = 'Normalny';

  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog, private gymMembershipService: GymMembershipService) {
    this.formGroup = formBuilder.group({
      name:
        [null, Validators.required],
      priceMonthGross:
        [null, Validators.compose([Validators.required, Validators.max(120000),
          Validators.pattern('[0-9]+(,[0-9][0-9]?)?')])],
      numberOfMonths:
        [null, Validators.compose([Validators.required,
          Validators.min(1), Validators.max(12), Validators.pattern('[0-9]+')])],
      typeOfMembership:
        [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    this.gymMembership.typeOfMembership = this.defaultTypeofMembership;
    this.formGroup.get('name').setValue(this.gymMembership.name);
    this.formGroup.get('priceMonthGross').setValue(this.gymMembership.priceMonthGross);
    this.formGroup.get('numberOfMonths').setValue(this.gymMembership.numberOfMonths);
    this.formGroup.get('typeOfMembership').setValue(this.gymMembership.typeOfMembership);
  }

  addGymMembership(gymMembership: GymMembership) {
    this.gymMembership = gymMembership;
    this.gymMembership.priceMonthGross = Number(this.gymMembershipPriceMonthGrossWithPoint?.toString()
      .replace(',', '.'));
    this.gymMembershipService.addGymMembership(gymMembership).subscribe(
      result => {
        const refDialog = this.dialog.open(SuccessOfAddedGymMembershipComponent);
        refDialog.afterClosed().subscribe(data => {
          this.dialog.closeAll();
        });
      },
      error => {
        this.dialog.open(OperationErrorComponent);
      }
    );
  }

  countTotalPrice(gymMembership: GymMembership) {
    this.gymMembership = gymMembership;
    this.gymMembershipPriceMonthGrossWithPoint = this.gymMembership.priceMonthGross?.toString()
      .replace(',', '.');
    this.gymMembership.priceMonthGross = Number(this.gymMembershipPriceMonthGrossWithPoint);
    this.gymMembership.priceTotalGross = Number(this.gymMembershipPriceMonthGrossWithPoint)
      * this.gymMembership.numberOfMonths;
    this.priceTotalGrossShown = this.gymMembership.priceTotalGross;
  }
}
