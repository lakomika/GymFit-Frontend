import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserApp} from '../../../../common/_helpers/UserApp';

@Component({
  selector: 'app-show-more-data-receptionist',
  templateUrl: './show-more-data-receptionist.component.html',
  styleUrls: ['./show-more-data-receptionist.component.css']
})
export class ShowMoreDataReceptionistComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public userApp: UserApp, public dialogRef: MatDialogRef<ShowMoreDataReceptionistComponent>) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
