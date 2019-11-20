import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Deatils} from '../Deatils';
import {AddPostService} from '../add-post.service';
import {LocalStorageService} from 'ngx-webstorage';
import {ActivatedRoute, Router} from '@angular/router';
import {PostPayload} from '../add-post/post-payload';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  posts: Observable<Array<Deatils>>;
  permaLink: any;
  x: Number;
  constructor(private postService: AddPostService, private router: ActivatedRoute, private  rout: Router) { }

  ngOnInit() {
    this.posts = this.postService.getPostByUsername();
  }
  delete(id: any) {
    // tslint:disable-next-line:radix
    this.x = parseInt(id);
    this.postService.deletePost(this.x).subscribe(data => {
      this.rout.navigateByUrl('/my-post');
    }, error => {
      console.log('Failure Response');
    });
  }



}
