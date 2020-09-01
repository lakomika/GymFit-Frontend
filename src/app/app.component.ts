import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './common/_services/token-storage.service';
import {Router} from '@angular/router';
import {Url} from './common/_helpers/url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showReceptionistBoard = false;
  showClientBoard = false;
  username: string;
  private roles: string[];

  constructor(private tokenStorageService: TokenStorageService, private router: Router) {
  }

  ngOnInit() {
    let url = new Url();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showReceptionistBoard = this.roles.includes('ROLE_RECEPTIONIST');
      this.showClientBoard = this.roles.includes('ROLE_CLIENT');
      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/home']);
  }
}
