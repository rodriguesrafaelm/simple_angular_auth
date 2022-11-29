import { tap } from 'rxjs';
import { PostsService } from './posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any = [
    {
      nome: 'John Doe',
      idade: '25',
    },
    {
      nome: 'Foo Bar',
      idade: '24',
    },
  ];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}

  getUserFeed(userId: number) {
    this.postsService.getFeed(userId).pipe(
      tap( (response) => console.log(response))
    ).subscribe({
      next: (response) => (this.posts = response),
    });
  }
}
