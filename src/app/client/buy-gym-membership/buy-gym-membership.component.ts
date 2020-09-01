import {Component, OnInit} from '@angular/core';
import {GymMembershipService} from '../../admin/management-gym-membership/gym-membership.service';
import {PageEvent} from '@angular/material/paginator';
import {GymMembership, GymMembershipListResponse} from '../../admin/management-gym-membership/GymMembership';
import {BuyGymMembershipService} from './buy-gym-membership.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buy-gym-membership',
  templateUrl: './buy-gym-membership.component.html',
  styleUrls: ['./buy-gym-membership.component.css']
})
export class BuyGymMembershipComponent implements OnInit {
  totalElements = 0;
  gymMemberships: GymMembership[] = [];
  gymMembershipsList: GymMembershipListResponse;
  page = 0;
  size = 10;
  dataFetched = false;
  isPendingInvoice = false;

  constructor(private gymMembershipService: GymMembershipService, private route: ActivatedRoute,
              private buyGymMembershipService: BuyGymMembershipService) {
  }

  ngOnInit(): void {
    this.buyGymMembershipService.isPendingInvoice().subscribe(data => {
      this.isPendingInvoice = data.pendingInvoice;
    });
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
    this.route.queryParams.subscribe(params => {
      gymMembership.id = params.gymMembershipId;
    });
  }

  private getActiveGymMemberships(request) {
    this.gymMembershipService.getGymMembershipsByStatus(request)
      .subscribe(data => {
        this.gymMembershipsList = data;
        this.gymMemberships = this.gymMembershipsList.content;
        this.totalElements = this.gymMembershipsList.totalElements;
        this.dataFetched = true;
      });
  }
}
