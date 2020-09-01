import {Component, OnInit} from '@angular/core';
import {DataClientAboutGymPassService} from './data-client-about-gym-pass.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {GymPassIncorrectDataComponent} from './gym-pass-incorrect-data/gym-pass-incorrect-data.component';
import {GymPassInvalidComponent} from './gym-pass-invalid/gym-pass-invalid.component';
import {GymPassValidComponent} from './gym-pass-valid/gym-pass-valid.component';

@Component({
  selector: 'app-check-status-gym-pass',
  templateUrl: './check-status-gym-pass.component.html',
  styleUrls: ['./check-status-gym-pass.component.css']
})
export class CheckStatusGymPassComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: DataClientAboutGymPassService, private dialog: MatDialog) {
    this.formGroup = formBuilder.group({
      numberCard:
        [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(64)])]
    });
  }

  ngOnInit(): void {
  }

  getDataClientAboutGymPass(response: any) {
    this.service.get(response.numberCard).subscribe(data => {
      const dataClientAboutGymPass = data;
      if (data.status === 'VALID') {
        this.dialog.open(GymPassValidComponent, {data: dataClientAboutGymPass});
      } else {
        this.dialog.open(GymPassInvalidComponent, {data: dataClientAboutGymPass});
      }
    }, error => {
      this.dialog.open(GymPassIncorrectDataComponent);
    });
  }
}
