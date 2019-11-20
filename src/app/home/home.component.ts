import { Component, OnInit } from '@angular/core';
import {AddPostService} from '../add-post.service';
import {combineLatest, Observable, of} from 'rxjs';
import {PostPayload} from '../add-post/post-payload';
import {Deatils} from '../Deatils';
import {DatePipe} from '@angular/common';
import {TablesortPipe} from '../tablesort.pipe';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {PostSecurity} from '../PostSecurity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Observable<Array<PostSecurity>>;
  searchTerm: string;
  p = 0;
  // filterPosts: Observable<Array<Deatils>>;
  // filter: FormControl;
  // filter$: Observable<string>;
  constructor(private postService: AddPostService) {}


  ngOnInit() {
    this.posts = this.postService.getAllPosts1();
  }


}
