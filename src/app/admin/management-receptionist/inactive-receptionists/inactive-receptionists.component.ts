import {Component, OnInit} from '@angular/core';
import {UserApp, UserAppResponse} from '../../../common/_helpers/UserApp';
import {ReceptionistService} from '../receptionist.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {ShowMoreDataReceptionistComponent} from '../common/show-more-data-receptionist/show-more-data-receptionist.component';

@Component({
  selector: 'app-inactive-receptionists',
  templateUrl: './inactive-receptionists.component.html',
  styleUrls: ['./inactive-receptionists.component.css']
})
export class InactiveReceptionistsComponent implements OnInit {

  totalElements = 0;
  userApps: UserApp[] = [];
  userAppResponse: UserAppResponse;
  page = 0;
  size = 10;
  dataFetched = false;

  constructor(private receptionistService: ReceptionistService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getActiveReceptionists({page: '0', size: '10', isActive: 'false'});
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
    this.getActiveReceptionists(request);
  }

  moreData(user: UserApp) {
    this.dialog.open(ShowMoreDataReceptionistComponent, {data: user});
  }

  private getActiveReceptionists(request) {
    this.receptionistService.getReceptionistsByStatus(request)
      .subscribe(data => {
        this.userAppResponse = data;
        this.userApps = this.userAppResponse.content;
        this.totalElements = this.userAppResponse.totalElements;
        this.dataFetched = true;
      });
  }
}
