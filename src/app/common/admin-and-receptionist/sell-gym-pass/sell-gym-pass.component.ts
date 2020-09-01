import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataClientAboutGymPassService} from '../check-status-gym-pass/data-client-about-gym-pass.service';
import {MatDialog} from '@angular/material/dialog';
import {GymPassIncorrectDataComponent} from '../check-status-gym-pass/gym-pass-incorrect-data/gym-pass-incorrect-data.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sell-gym-pass',
  templateUrl: './sell-gym-pass.component.html',
  styleUrls: ['./sell-gym-pass.component.css']
})
export class SellGymPassComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: DataClientAboutGymPassService,
              private dialog: MatDialog, private router: Router) {
    this.formGroup = formBuilder.group({
      numberCard:
        [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(64)])]
    });
  }

  ngOnInit(): void {
  }

  getDataClientAboutGymPass(response: any) {
    this.service.get(response.numberCard).subscribe(gymPassClientData => {
      this.router.navigate(['admin-and-receptionist/management-client/sell-gym-pass/choice-gym-pass'],
        {queryParams: {numberCard: response.numberCard, dataResponse: JSON.stringify(gymPassClientData)}});
    }, error => {
      this.dialog.open(GymPassIncorrectDataComponent);
    });
  }
}
