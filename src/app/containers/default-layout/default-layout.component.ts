import {Component} from '@angular/core';
import {ClientAdmin, ClientInputter, ClientReviewer, navItems} from '../../_nav';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  superAdmin = [];
  username: string;

  constructor(
    private route: Router,
  ) {
    this.username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    if (role === 'SERVICE-PROVIDER') {
      this.navItems = navItems;
    }
    if (role === 'CLIENT-REVIEWER') {
      this.navItems = ClientReviewer;
    }
    if (role === 'CLIENT-ADMIN') {
      this.navItems = ClientAdmin;
    }
    if (role === 'CLIENT-INPUTTER') {
      this.navItems = ClientInputter;
    }
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  onLogOut() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
