import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  devTests = [
    {
      nome: 'John Doe',
      idade: '25',
    },
    {
      nome: 'Foo Bar',
      idade: '24'
    },
  ]


  constructor(private router: Router) { }

  ngOnInit(): void {
  }



}
