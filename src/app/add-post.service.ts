import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostPayload} from './add-post/post-payload';
import {Observable} from 'rxjs';
import {Deatils} from './Deatils';
import {LocalStorageService} from 'ngx-webstorage';
import {UserDeatils} from './userDeatils';
import {PostSecurity} from './PostSecurity';
import {Comment1} from './Comment1';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient: HttpClient, private localStorgae: LocalStorageService) {
  }

  addPost(postSecurity: PostSecurity) {
    return this.httpClient.post('http://localhost:8082/api/posts/', postSecurity);
  }
  deletePost(permaLink: Number) {
    return this.httpClient.delete('http://localhost:8082/api/posts/delete/' +  permaLink );
  }
  updatePost(id: Number, title: String, content: String, security: Boolean) {
    alert('http://localhost:8082/api/posts/update/' + id + '/' + title + '/' + content + '/' + security);
    console.log(security);
    // console.log('http://localhost:8082/api/posts/update/' + id + '/' + title + '/' + content);
    return this.httpClient.put('http://localhost:8082/api/posts/update/' + id + '/' + title + '/' + content + '/' + security, null);
   // return this.httpClient.put('http://localhost:8082/api/posts/update/' + id + '/' + title + '/' + content, null);
  }

  getAllPosts(): Observable<Array<PostPayload>> {
    return this.httpClient.get<Array<PostPayload>>('http://localhost:8082/api/posts/all');
  }

  getPost(permaLink: Number): Observable<PostPayload> {
    // alert('http://localhost:8082/api/posts/get/' + permaLink);
    return this.httpClient.get<PostPayload>('http://localhost:8082/api/posts/get/' + permaLink);
  }

  getAllPosts1(): Observable<Array<PostSecurity>> {
    return this.httpClient.get<Array<PostSecurity>>('http://localhost:8082/api/posts/all');
  }
  getPost1(permaLink: Number): Observable<Deatils> {
    return this.httpClient.get<Deatils>('http://localhost:8082/api/posts/get/' + permaLink);
  }
  // @ts-ignore
  getPostByUsername(): Observable<Array<Deatils>> {
   return this.httpClient.get<Array<Deatils>>('http://localhost:8082/api/posts/get/sort/' + this.localStorgae.retrieve('username'));
  }
  getUserDeatils(): Observable<UserDeatils> {
    return  this.httpClient.get<UserDeatils>('http://localhost:8082/api/auth/getuser/' + this.localStorgae.retrieve('username'));
  }
  updateUser1(username: String, password: String, email: String, id: Number) {
    // this.localStorgae.store('username', username);
    // this.localStorgae.store('authenticationToken', password);
    return this.httpClient.put('http://localhost:8082/api/auth/update/user/' + username + '/' + email + '/'  + password + '/' + id, null);
  }
  addComment(comment1: Comment1) {
    return this.httpClient.post('http://localhost:8082/api/posts/comment/', comment1);
  }
  getAllComment(title: String): Observable<Array<Comment1>> {
    title = title.replace(' ', '');
     alert('http://localhost:8082/api/posts/allcomment/' + title);
    return this.httpClient.get<Array<Comment1>>('http://localhost:8082/api/posts/allcomment/' + title);
  }


}

