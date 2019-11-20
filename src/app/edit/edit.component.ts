import { Component, OnInit } from '@angular/core';
import {Deatils} from '../Deatils';
import {ActivatedRoute, Router} from '@angular/router';
import {AddPostService} from '../add-post.service';
import {PostSecurity} from '../PostSecurity';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  post: Deatils;
  postSecurity: PostSecurity;
  permaLink: Number;
  title: String;
  content: String;
  private x: Number;


  constructor(private router: ActivatedRoute, private postService: AddPostService, private  rout: Router) {
    this.postSecurity = {
      id: '',
      content: '',
      title: '',
      username: '',
      security: true
    };
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.postService.getPost(this.permaLink).subscribe((data: Deatils) => {
      this.post = data;
    }, (err: any) => {
      console.log('Failure Response');
    });
  }

  fun() {
    //  this.postSecurity.title = this.post.title;
    // this.postSecurity.content = this.post.content;
    // this.postSecurity.security = true;

    // tslint:disable-next-line:max-line-length
    this.postService.updatePost(this.permaLink, this.post.title, this.post.content, this.postSecurity.security).subscribe(data => {
      this.rout.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    });
    console.log(this.post.title);
    console.log(this.post.content);
    console.log(this.post.id);
  }
}
