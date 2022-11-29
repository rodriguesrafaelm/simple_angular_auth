
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = environment.apiURL

  constructor(private httpClient: HttpClient) { }

  getFeed(userId: number){
    return this.httpClient.get(this.url + "/user/posts/" + userId)
  }
}
