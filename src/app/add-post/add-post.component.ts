import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostPayload} from './post-payload';
import {AddPostService} from '../add-post.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {PostSecurity} from '../PostSecurity';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  postPayload: PostPayload;
  postSecurity: PostSecurity;
  title = new FormControl('');
  body = new FormControl('');
  set = new FormControl(true);


  constructor(private addpostService: AddPostService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body,
      set: this.set
    });
    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: ''
    };
    this.postSecurity = {
      id: '',
      content: '',
      title: '',
      username: '',
      security: false
    };
  }

  ngOnInit() {
  }

  addPost() {
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.postSecurity.content = this.postPayload.content;
    this.postSecurity.title = this.postPayload.title;
    this.postSecurity.security = this.addPostForm.get('set').value;
    console.log(this.postSecurity.security);
    this.addpostService.addPost(this.postSecurity).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    });
  }



}
