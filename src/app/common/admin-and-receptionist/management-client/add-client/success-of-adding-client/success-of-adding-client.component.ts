import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserApp} from '../../../../_helpers/UserApp';

@Component({
  selector: 'app-success-of-adding-client',
  templateUrl: './success-of-adding-client.component.html',
  styleUrls: ['./success-of-adding-client.component.css']
})
export class SuccessOfAddingClientComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public userApp: UserApp) {
  }

  ngOnInit(): void {
  }

  print() {
    window.print();
  }
}
