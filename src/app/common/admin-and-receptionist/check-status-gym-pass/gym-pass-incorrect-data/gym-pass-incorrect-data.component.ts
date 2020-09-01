import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-gym-pass-incorrect-data',
  templateUrl: './gym-pass-incorrect-data.component.html',
  styleUrls: ['./gym-pass-incorrect-data.component.css']
})
export class GymPassIncorrectDataComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GymPassIncorrectDataComponent>) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
