import {Component, OnInit} from '@angular/core';
import {ClientService} from '../utils/client.service';

@Component({
  selector: 'app-access-card',
  templateUrl: './access-card.component.html',
  styleUrls: ['./access-card.component.css']
})
export class AccessCardComponent implements OnInit {
  numberAccessCard: number;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getNumberAccessCard().subscribe(data => {
      this.numberAccessCard = data.numberAccessCard;
    });

  }

}
