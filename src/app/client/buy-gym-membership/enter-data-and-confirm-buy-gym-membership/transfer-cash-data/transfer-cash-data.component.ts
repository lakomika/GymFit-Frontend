import {Component, OnInit} from '@angular/core';
import {TransferCashData} from '../TransferCashData';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-transfer-cash-data',
  templateUrl: './transfer-cash-data.component.html',
  styleUrls: ['./transfer-cash-data.component.css']
})
export class TransferCashDataComponent implements OnInit {
  transferData: TransferCashData = new TransferCashData();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events
      .subscribe((event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          this.router.navigate(['/client/main']);
        }
      });
  }

  ngOnInit(): void {
    this.transferData = JSON.parse(this.activatedRoute.snapshot.queryParamMap.get('data'));
  }

}
