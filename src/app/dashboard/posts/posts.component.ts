import { Usuario } from 'src/app/autenticacao/usuario/usuario';

import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { tap, map } from 'rxjs';
import { PostsService } from './posts.service';
import { Component, OnInit } from '@angular/core';
import { Post, PostData } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  user!: Usuario;
  postData!: PostData;
  constructor(private postsService: PostsService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.startPosts()
  }

  startPosts(){
    this.usuarioService.retornaUsuario().pipe(
      map( (value) => value.sub ? value.sub : "")
    ).subscribe( {
      next: (value) => this.getUserFeed(value)
    }
    )
  }

  getUserFeed(userId: string) {
    this.postsService.getFeed(userId).pipe(
      tap( (response) => console.log(`this is the ${response}`))
    ).subscribe({
      next: (response) => (this.postData = response),
    })

    ;
  }
}
