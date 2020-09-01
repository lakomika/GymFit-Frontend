import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-success-register-client',
  templateUrl: './success-register-client.component.html',
  styleUrls: ['./success-register-client.component.css']
})
export class SuccessRegisterClientComponent implements OnInit {


  constructor(private router: Router, public dialogRef: MatDialogRef<SuccessRegisterClientComponent>) {
  }

  ngOnInit(): void {
  }

  goToMainPage() {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }

  goToLoginPage() {
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }
}
