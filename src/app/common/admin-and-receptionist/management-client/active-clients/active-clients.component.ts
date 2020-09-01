import {Component, OnInit} from '@angular/core';
import {UserApp, UserAppResponse} from '../../../_helpers/UserApp';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {ChangePasswordUserComponent} from '../../user-operations/change-password-user/change-password-user.component';
import {ClientService} from '../client.service';
import {ShowMoreDataClientComponent} from '../common/show-more-data-client/show-more-data-client.component';
import {DeactivationClientDialogComponent} from './deactivation-client-dialog/deactivation-client-dialog.component';

@Component({
  selector: 'app-active-clients',
  templateUrl: './active-clients.component.html',
  styleUrls: ['./active-clients.component.css']
})
export class ActiveClientsComponent implements OnInit {

  totalElements = 0;
  userApps: UserApp[] = [];
  userAppResponse: UserAppResponse;
  page = 0;
  size = 10;
  dataFetched = false;

  constructor(private clientService: ClientService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getClientsByStatus({page: '0', size: '10', isActive: 'true'});
  }

  changePage(event: PageEvent) {
    const request = {
      page: undefined,
      size: undefined,
      isActive: undefined
    };
    request.page = event.pageIndex.toString();
    request.size = event.pageSize.toString();
    this.page = request.page;
    this.size = request.size;
    request.isActive = true;
    this.getClientsByStatus(request);
  }

  moreData(user: UserApp) {
    this.dialog.open(ShowMoreDataClientComponent, {data: user});
  }

  changePassword(user: UserApp) {
    this.dialog.open(ChangePasswordUserComponent, {data: user});
  }

  deactivationAccount(user: UserApp) {
    this.dialog.open(DeactivationClientDialogComponent, {data: user});
  }

  private getClientsByStatus(request) {
    this.clientService.getClientsByStatus(request)
      .subscribe(data => {
        this.userAppResponse = data;
        this.userApps = this.userAppResponse.content;
        this.totalElements = this.userAppResponse.totalElements;
        this.dataFetched = true;
      });
  }


}
