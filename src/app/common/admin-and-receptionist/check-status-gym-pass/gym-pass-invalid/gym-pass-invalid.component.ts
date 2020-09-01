import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {GymPassClientData} from '../GymPassClientData';

@Component({
  selector: 'app-gym-pass-invalid',
  templateUrl: './gym-pass-invalid.component.html',
  styleUrls: ['./gym-pass-invalid.component.css']
})
export class GymPassInvalidComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public gymPassClientData: GymPassClientData) {
  }

  ngOnInit(): void {
  }


  closeDialog() {
    window.location.reload();
  }

}
