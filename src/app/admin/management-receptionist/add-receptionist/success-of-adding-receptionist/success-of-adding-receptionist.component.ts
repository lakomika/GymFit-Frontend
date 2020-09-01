import {Component, Inject, OnInit} from '@angular/core';
import {UserApp} from '../../../../common/_helpers/UserApp';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-success-of-adding-receptionist',
  templateUrl: './success-of-adding-receptionist.component.html',
  styleUrls: ['./success-of-adding-receptionist.component.css']
})
export class SuccessOfAddingReceptionistComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public userApp: UserApp) {
  }

  ngOnInit(): void {
  }

  print() {
    window.print();
  }
}
