import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginPayload} from '../login-payload';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPayload;

  constructor(private authService: AuthService, private router: Router, private localStorage: LocalStorageService) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.loginPayload = {
      username: '',
      password: ''
    };
    const token = this.localStorage.retrieve('authenticationToken');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    if(this.loginForm.get('username').value  == '' || this.loginPayload.password  == '') {
      alert('Login Denied!!!');
    }

    this.authService.login(this.loginPayload).subscribe(data => {
      if (data) {
        alert('login success');
        this.router.navigateByUrl('/home');
      } else {
        if (this.localStorage.retrieve('authenticationToken') == '') {
          alert('Login Denied!!!');
        }
        console.log('Login failed');
      }
    });
  }
}
