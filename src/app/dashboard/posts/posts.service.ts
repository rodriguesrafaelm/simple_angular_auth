
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = environment.apiURL

  constructor(private httpClient: HttpClient) { }

  getFeed(userId: number){
    return this.httpClient.get<Array<Post>>(this.url + "/api/user/get-post/" + userId)
  }
}
