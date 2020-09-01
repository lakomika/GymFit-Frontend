import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-success-of-added-gym-membership',
  templateUrl: './success-of-added-gym-membership.component.html',
  styleUrls: ['./success-of-added-gym-membership.component.css']
})
export class SuccessOfAddedGymMembershipComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  refresh(): void {
    window.location.reload();
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
