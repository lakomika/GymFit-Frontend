import {Component, OnInit} from '@angular/core';
import {ReceptionistService} from '../receptionist.service';
import {PageEvent} from '@angular/material/paginator';
import {UserApp, UserAppResponse} from '../../../common/_helpers/UserApp';
import {MatDialog} from '@angular/material/dialog';
import {ShowMoreDataReceptionistComponent} from '../common/show-more-data-receptionist/show-more-data-receptionist.component';
import {ChangePasswordUserComponent} from '../../../common/admin-and-receptionist/user-operations/change-password-user/change-password-user.component';
import {DeactivationAccountUserComponent} from '../../../common/admin-and-receptionist/user-operations/deactivation-account-user/deactivation-account-user.component';

@Component({
  selector: 'app-active-receptionists',
  templateUrl: './active-receptionists.component.html',
  styleUrls: ['./active-receptionists.component.css']
})
export class ActiveReceptionistsComponent implements OnInit {

  totalElements = 0;
  userApps: UserApp[] = [];
  userAppResponse: UserAppResponse;
  page = 0;
  size = 10;
  dataFetched = false;

  constructor(private receptionistService: ReceptionistService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getActiveReceptionists({page: '0', size: '10', isActive: 'true'});
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
    this.getActiveReceptionists(request);
  }

  moreData(user: UserApp) {
    this.dialog.open(ShowMoreDataReceptionistComponent, {data: user});
  }

  changePassword(user: UserApp) {
    this.dialog.open(ChangePasswordUserComponent, {data: user});
  }

  deactivationAccount(user: UserApp) {
    this.dialog.open(DeactivationAccountUserComponent, {data: user});
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
