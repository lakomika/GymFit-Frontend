import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {GymPassClientData} from '../GymPassClientData';

@Component({
  selector: 'app-gym-pass-valid',
  templateUrl: './gym-pass-valid.component.html',
  styleUrls: ['./gym-pass-valid.component.css']
})
export class GymPassValidComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public gymPassClientData: GymPassClientData) {
  }

  ngOnInit(): void {
  }


  closeDialog() {
    window.location.reload();
  }
}
