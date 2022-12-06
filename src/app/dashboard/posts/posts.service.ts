
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostData } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = environment.apiURL

  constructor(private httpClient: HttpClient) { }

  getFeed(userId: string){
    return this.httpClient.get<PostData>(this.url + "/api/user/get-post/" + userId)
  }
}
