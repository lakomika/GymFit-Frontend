import {Component, OnInit} from '@angular/core';
import {UserApp, UserAppResponse} from '../../../_helpers/UserApp';
import {ClientService} from '../client.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {ShowMoreDataClientComponent} from '../common/show-more-data-client/show-more-data-client.component';

@Component({
  selector: 'app-inactive-clients',
  templateUrl: './inactive-clients.component.html',
  styleUrls: ['./inactive-clients.component.css']
})
export class InactiveClientsComponent implements OnInit {

  totalElements = 0;
  userApps: UserApp[] = [];
  userAppResponse: UserAppResponse;
  page = 0;
  size = 10;
  dataFetched = false;

  constructor(private clientService: ClientService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getActiveClients({page: '0', size: '10', isActive: 'false'});
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
    request.isActive = false;
    this.getActiveClients(request);
  }

  moreData(user: UserApp) {
    this.dialog.open(ShowMoreDataClientComponent, {data: user});
  }

  private getActiveClients(request) {
    this.clientService.getClientsByStatus(request)
      .subscribe(data => {
        this.userAppResponse = data;
        this.userApps = this.userAppResponse.content;
        this.totalElements = this.userAppResponse.totalElements;
        this.dataFetched = true;
      });
  }


}
