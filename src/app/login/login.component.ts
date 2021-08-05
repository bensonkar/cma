import {Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Notify} from '../shared/class/notify';
import {MyErrorStateMatcher} from '../shared/class/error-state-handler';
import {StewardService} from '../shared/services/steward/steward.service';
import { DOCUMENT } from '@angular/common';
import { Login } from './../entities/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  isFailed = false;
  message: string;
  matcher = new MyErrorStateMatcher();
  users = [];
  loadtext = '';
  isLoggedIn = true;
  login: Login;

  constructor(
    public router: Router,
    public notify: Notify,
    private stewardService: StewardService<any, any>,
    @Inject(DOCUMENT) document
  ) {
    this.login = new Login();
  }

  ngOnInit() {
    console.log('this is a test for java and javascript');
    const inst = this;
    window.localStorage.clear();
  }

  onLoggedin(form: NgForm) {
    const params = new URLSearchParams();
    params.append('username', this.model.email);
    params.append('password', this.model.password);
    // params.append('grant_type', 'password'); // oauth/token // process-login

    this.stewardService.postNoToken('users/login', this.login).subscribe((response: any) => {
      if (response.code === 200) {
        // localStorage.setItem('username', 'cma@sy-intelli.com');
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('LoggedInUserId', response.data.user.id);
        localStorage.setItem('username',response.data.user.username);
        localStorage.setItem('role',response.data.userRole);
        console.log('respones ******* ',response);
        
        this.notify.showSuccess(response.message);
        this.router.navigate(['home/dashboard/dashboard']);
      } if (response.code === 301) {
        console.log('response /*********/ ',response);
        
        localStorage.setItem('LoggedInUserId', response.data.data.id);
        this.router.navigate(['first-change']);
      } else {
        this.notify.showWarning(response.message);
      }

 

    },
      error => {
        this.message = error.error.message;
        this.notify.show(this.message);

      });
  }

}
