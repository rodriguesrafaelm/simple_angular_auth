import { UserProfileService } from './user-profile.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostData } from '../dashboard/posts/post'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userName!: string
  postData!: Observable<PostData>;
  constructor(private userProfileService: UserProfileService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName']
    this.loadProfile()
  }


  loadProfile(){
    this.postData = this.userProfileService.getFeedByUsername(this.userName)
  }

}
