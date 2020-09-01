import {Component, OnInit} from '@angular/core';
import {BuyGymMembershipService} from '../buy-gym-membership.service';
import {GymMembership} from '../../../admin/management-gym-membership/GymMembership';
import {ClientService} from '../../utils/client.service';
import {ClientPersonalData} from '../../utils/ClientPersonalData';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {InvoiceCreate} from '../../utils/InvoiceCreate';
import {InvoiceService} from '../../utils/invoice.service';
import {TransferCashData} from './TransferCashData';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-enter-data-and-confirm',
  templateUrl: './enter-data-and-confirm.component.html',
  styleUrls: ['./enter-data-and-confirm.component.css']
})
export class EnterDataAndConfirmComponent implements OnInit {
  transferCashData: TransferCashData = new TransferCashData();
  gymMembership: GymMembership = new GymMembership();
  formGroup: FormGroup;
  minStart = new Date();
  maxStart = new Date();
  plannedStartOfThePass = new Date();
  client: ClientPersonalData = new ClientPersonalData();
  invoiceCreate: InvoiceCreate = new InvoiceCreate();
  dateOfEndGymPass = new Date();
  showCalendar: boolean;
  dataFetched = false;
  gymPassId: number;

  constructor(private formBuilder: FormBuilder, private invoiceService: InvoiceService,
              private buyGymMembershipService: BuyGymMembershipService, private clientService: ClientService,
              private router: Router, private route: ActivatedRoute) {
    this.formGroup = formBuilder.group({
      name:
        [null, Validators.required],
      surname:
        [null, Validators.required],
      street:
        [null, Validators.compose([Validators.required])],
      postcode:
        [null, Validators.compose(
          [Validators.required, Validators.pattern('([0-9]{2})-[0-9]{3}')])],
      phoneNumber:
        [null, Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')])],
      city:
        [null, Validators.compose([Validators.required])],
      plannedStartOfThePass:
        [null, Validators.required],
      recaptchaReactive: new FormControl(null, Validators.required)
    });
    this.minStart.setHours(0, 0, 0, 0);
    this.maxStart.setDate(this.plannedStartOfThePass.getDate() + 90);
  }

  ngOnInit(): void {
    this.gymPassId = Number(this.route.snapshot.queryParamMap.get('gymMembershipId'));
    this.buyGymMembershipService
      .getActiveGymPassById(this.gymPassId)
      .subscribe(data => {
        this.gymMembership = data;
      }, error => {
        this.router.navigate(['/client/main']);
      });
    this.clientService.getPersonalData().subscribe(data => {
      this.client = data;
      this.formGroup.patchValue({
        name: this.client.name,
        surname: this.client.surname,
        street: this.client.street,
        postcode: this.client.postcode,
        phoneNumber: this.client.phoneNumber,
        city: this.client.city
      });
    });
    this.buyGymMembershipService.getDateOfEndGymPass().subscribe(data => {
      this.dateOfEndGymPass = new Date(Date.parse(data));
      if (this.dateOfEndGymPass > new Date()) {
        this.showCalendar = false;
        this.plannedStartOfThePass = this.dateOfEndGymPass;
        this.formGroup.patchValue({
          plannedStartOfThePass: this.plannedStartOfThePass,
        });
      } else {
        this.showCalendar = true;
      }
      this.dataFetched = true;
    });
  }


  approvalOfChoice() {
    this.invoiceCreate.client.name = this.formGroup.get('name').value;
    this.invoiceCreate.client.surname = this.formGroup.get('surname').value;
    this.invoiceCreate.client.phoneNumber = this.formGroup.get('phoneNumber').value;
    this.invoiceCreate.client.street = this.formGroup.get('street').value;
    this.invoiceCreate.client.postcode = this.formGroup.get('postcode').value;
    this.invoiceCreate.client.city = this.formGroup.get('city').value;
    this.invoiceCreate.plannedStartOfThePass = this.formGroup.get('plannedStartOfThePass').value;
    this.invoiceCreate.gymMembershipId = this.gymPassId;
    this.invoiceService.buyGymPassByClient(this.invoiceCreate).subscribe(data => {
      this.transferCashData = data;
      this.router.navigate(['client/buy-gym-membership/enter-data-and-confirm/transfer-cash-data'],
        {queryParams: {data: JSON.stringify(this.transferCashData)}});
    });
  }


}

