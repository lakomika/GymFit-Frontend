import {Component, OnInit} from '@angular/core';
import {ClientMainDataService} from './client-main-data.service';
import {GymPassClientData} from '../../common/admin-and-receptionist/check-status-gym-pass/GymPassClientData';


@Component({
  selector: 'app-main-client',
  templateUrl: './main-client.component.html',
  styleUrls: ['./main-client.component.css']
})


export class MainClientComponent implements OnInit {

  gymPassClientData: GymPassClientData = new GymPassClientData();

  constructor(private clientMainDataService: ClientMainDataService) {
    clientMainDataService.get().subscribe(data => {
      this.gymPassClientData = data;
    });
  }

  ngOnInit(): void {
  }

}
