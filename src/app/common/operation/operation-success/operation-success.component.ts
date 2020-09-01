import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

interface Data {
  message: string;
  routeLink: string;
}

@Component({
  selector: 'app-edit-success',
  templateUrl: './operation-success.component.html',
  styleUrls: ['./operation-success.component.css']
})

export class OperationSuccessComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Data, public dialogRef: MatDialogRef<OperationSuccessComponent>,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
    if (this.data?.routeLink === undefined) {
      window.location.reload();
    } else {
      this.router.navigate([this.data.routeLink]);
    }
  }
}
