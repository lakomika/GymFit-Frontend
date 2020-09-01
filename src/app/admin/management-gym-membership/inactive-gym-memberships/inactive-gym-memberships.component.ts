import {Component, OnInit} from '@angular/core';
import {GymMembership, GymMembershipListResponse} from '../GymMembership';
import {GymMembershipService} from '../gym-membership.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-inactive-gym-memberships',
  templateUrl: './inactive-gym-memberships.component.html',
  styleUrls: ['./inactive-gym-memberships.component.css']
})
export class InactiveGymMembershipsComponent implements OnInit {

  totalElements = 0;
  gymMemberships: GymMembership[] = [];
  gymMembershipsList: GymMembershipListResponse;
  loading: boolean;
  page = 0;
  size = 10;
  dataFetched = false;

  constructor(private gymMembershipService: GymMembershipService) {
  }

  ngOnInit(): void {
    this.getInactiveGymMemberships({page: '0', size: '10'});
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
    this.getInactiveGymMemberships(request);
  }

  private getInactiveGymMemberships(request) {
    this.loading = true;
    this.gymMembershipService.inactiveGymMemberships(request)
      .subscribe(data => {
        this.gymMembershipsList = data;
        this.gymMemberships = this.gymMembershipsList.content;
        this.totalElements = this.gymMembershipsList.totalElements;
        this.dataFetched = true;
      });
  }

}
