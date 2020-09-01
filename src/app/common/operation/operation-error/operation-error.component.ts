import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

interface Data {
  message: string;
  routeLink: string;
}

@Component({
  selector: 'app-edit-error',
  templateUrl: './operation-error.component.html',
  styleUrls: ['./operation-error.component.css']
})
export class OperationErrorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Data, public dialogRef: MatDialogRef<OperationErrorComponent>) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
