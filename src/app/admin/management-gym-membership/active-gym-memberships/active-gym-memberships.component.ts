import {Component, OnInit} from '@angular/core';
import {GymMembershipService} from '../gym-membership.service';
import {GymMembership, GymMembershipListResponse} from '../GymMembership';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-active-gym-memberships',
  templateUrl: './active-gym-memberships.component.html',
  styleUrls: ['./active-gym-memberships.component.css']
})

export class ActiveGymMembershipsComponent implements OnInit {
  dataFetched = false;
  totalElements = 0;
  gymMemberships: GymMembership[] = [];
  gymMembershipsList: GymMembershipListResponse;
  loading: boolean;
  page = 0;
  size = 10;

  constructor(private gymMembershipService: GymMembershipService) {
  }

  ngOnInit(): void {
    this.getActiveGymMemberships({page: '0', size: '10'});
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
