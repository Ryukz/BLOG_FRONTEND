import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddPostService} from '../add-post.service';
import {PostPayload} from '../add-post/post-payload';
import {Deatils} from '../Deatils';
import {Comment1} from '../Comment1';
import {Observable} from 'rxjs';
import {PostSecurity} from '../PostSecurity';

// @ts-ignore
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Deatils;
  permaLink = null;
  comments: Comment1;
  comments12: Array<Comment1>;
  x: String;

  constructor(private router: ActivatedRoute, private postService: AddPostService, private  rout: Router) {
    this.comments = {
      id: null,
      pass: '',
      title: '',
      username: '',
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


    this.postService.getAllComment(this.post.title).subscribe(data => {
      this.comments12 = data;
      console.log(this.comments12);
    });

  }

  fun() {
    this.comments.username = this.post.username;
    this.comments.pass = this.x;
    this.comments.title = this.post.title;
    this.postService.addComment(this.comments).subscribe(data => {
      // this.fun1();
      this.rout.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    });

  }
  fun1() {
   this.postService.getAllComment(this.post.title).subscribe(data => {
     this.comments12 = data;
   });
  }

}
