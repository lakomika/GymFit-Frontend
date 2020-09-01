import {Component, OnInit} from '@angular/core';
import {GymPassClientData} from '../../check-status-gym-pass/GymPassClientData';
import {GymMembership, GymMembershipListResponse} from '../../../../admin/management-gym-membership/GymMembership';
import {GymMembershipService} from '../../../../admin/management-gym-membership/gym-membership.service';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {ConfirmChoiceGymPassComponent} from './confirm-choice-gym-pass/confirm-choice-gym-pass.component';

@Component({
  selector: 'app-choice-gym-pass',
  templateUrl: './choice-gym-pass.component.html',
  styleUrls: ['./choice-gym-pass.component.css']
})
export class ChoiceGymPassComponent implements OnInit {
  gymPassClientData: GymPassClientData = new GymPassClientData();
  totalElements = 0;
  gymMemberships: GymMembership[] = [];
  gymMembershipsList: GymMembershipListResponse;
  page = 0;
  size = 25;
  dataFetched = false;
  isPendingInvoice = false;
  numberCard: string;

  constructor(private gymMembershipService: GymMembershipService, private dialog: MatDialog,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.gymPassClientData = JSON.parse(this.activatedRoute.snapshot.queryParamMap.get('dataResponse'));
    this.numberCard = this.activatedRoute.snapshot.queryParamMap.get('numberCard');
    // this.buyGymMembershipService.isPendingInvoiceByNumberCard(this.numberCard).subscribe(data => {
    //   this.isPendingInvoice = data.pendingInvoice;
    // });
    this.getActiveGymMemberships({page: '0', size: '25'});
  }

  changePage(event: PageEvent) {
    const request = {
      page: undefined,
      size: undefined
    };
    request.page = event.pageIndex.toString();
    request.size = event.pageSize.toString();
    this.page = request.page;
    this.size = request.size;
    this.getActiveGymMemberships(request);
  }

  choiceGymMembership(gymMembership: GymMembership) {
    const dataRequest = {
      gymMembershipId: undefined,
      numberCard: undefined
    };
    dataRequest.gymMembershipId = gymMembership.id;
    dataRequest.numberCard = this.numberCard;
    this.dialog.open(ConfirmChoiceGymPassComponent, {data: dataRequest});
  }

  private getActiveGymMemberships(request) {
    this.gymMembershipService.getGymMembershipsByStatus(request)
      .subscribe(data => {
        this.gymMembershipsList = data;
        this.gymMemberships = this.gymMembershipsList.content;
        this.totalElements = this.gymMembershipsList.totalElements;
        this.dataFetched = true;
      }, error => {
      });
  }
}

