import {Component, OnInit} from '@angular/core';
import {GymMembership, GymMembershipListResponse} from '../GymMembership';
import {GymMembershipService} from '../gym-membership.service';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDeactivatingGymMembershipComponent} from './confirmation-deactivating-gym-membership/confirmation-deactivating-gym-membership.component';

@Component({
  selector: 'app-deactivate-gym-membership',
  templateUrl: './deactivate-gym-membership.component.html',
  styleUrls: ['./deactivate-gym-membership.component.css']
})
export class DeactivateGymMembershipComponent implements OnInit {

  totalElements = 0;
  gymMemberships: GymMembership[] = [];
  gymMembershipsList: GymMembershipListResponse;
  loading: boolean;
  page = 0;
  size = 10;
  dataFetched = false;

  constructor(private gymMembershipService: GymMembershipService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.deactivationGymMembership({page: '0', size: '10'});
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
    this.deactivationGymMembership(request);
  }

  deactivationGymMembershipConfirm(gymMembership: GymMembership) {
    const dialogRef = this.dialog.open(ConfirmationDeactivatingGymMembershipComponent, {data: gymMembership});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  private deactivationGymMembership(request) {
    this.loading = true;
    this.gymMembershipService.getGymMembershipsByStatus(request)
      .subscribe(data => {
        this.gymMembershipsList = data;
        this.gymMemberships = this.gymMembershipsList.content;
        this.totalElements = this.gymMembershipsList.totalElements;
        this.dataFetched = true;
      });
  }
}
