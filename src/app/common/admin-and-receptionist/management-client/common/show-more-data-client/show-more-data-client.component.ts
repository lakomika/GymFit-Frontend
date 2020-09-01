import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserApp} from '../../../../_helpers/UserApp';


@Component({
  selector: 'app-show-more-data-client',
  templateUrl: './show-more-data-client.component.html',
  styleUrls: ['./show-more-data-client.component.css']
})
export class ShowMoreDataClientComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public userApp: UserApp, public dialogRef: MatDialogRef<ShowMoreDataClientComponent>) {

  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
