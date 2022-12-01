import { Usuario } from 'src/app/autenticacao/usuario/usuario';

import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { tap } from 'rxjs';
import { PostsService } from './posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  user$ = this.usuarioService.retornaUsuario() as Usuario | any
  posts!: Post[];
  claims: any = this.getUserClaims()
  constructor(private postsService: PostsService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUserFeed(this.user$.sub)
  }


  getUserClaims(){
    return this.usuarioService.retornaClaims()
  }

  getUserFeed(userId: number) {
    this.postsService.getFeed(userId).pipe(
      tap( (response) => console.log(`this is the ${response}`))
    ).subscribe({
      next: (response) => (this.posts = response),
    })

    ;
  }
}
