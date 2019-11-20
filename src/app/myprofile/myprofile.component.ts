import { Component, OnInit } from '@angular/core';
import {PostPayload} from '../add-post/post-payload';
import {Deatils} from '../Deatils';
import {AddPostService} from '../add-post.service';
import {UserDeatils} from '../userDeatils';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
   post: UserDeatils;
  constructor( private addPostService: AddPostService, private rout: Router, private authService: AuthService) { }

  ngOnInit() {
    this.addPostService.getUserDeatils().subscribe((data: UserDeatils) => {
      this.post = data;
    }, (err: any) => {
      console.log('Failure Response');
    });
  }

  fun() {
     // console.log(this.post.username);
    this.addPostService.updateUser1(this.post.username, this.post.password, this.post.email, this.post.id).subscribe(data => {
      this.authService.logout();
      this.rout.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    });
  }
}



