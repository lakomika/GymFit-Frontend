import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-success-edit-profile-client',
  templateUrl: './success-edit-profile-client.component.html',
  styleUrls: ['./success-edit-profile-client.component.css']
})
export class SuccessEditProfileClientComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
