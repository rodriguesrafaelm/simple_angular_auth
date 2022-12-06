import { PostsService } from './../dashboard/posts/posts.service';
import { PostData } from './../dashboard/posts/post';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  url = environment.apiURL

  constructor(private httpClient: HttpClient) { }

  getFeedByUsername(userName: string){
    return this.httpClient.get<PostData>(this.url + "/user/get-profile/" + userName)
  }
}
