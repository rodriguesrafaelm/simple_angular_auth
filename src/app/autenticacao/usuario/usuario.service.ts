import { HttpClient } from '@angular/common/http';

import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode'
import { Usuario } from 'src/app/autenticacao/usuario/usuario';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.apiURL


  private usuarioSubject = new BehaviorSubject<Usuario>({})

  constructor(private tokenService: TokenService, private httpClient: HttpClient, ) {
    if(this.tokenService.possuiToken())
      this.decodificaJWT()
   }



  retornaUsuario() {
    return this.usuarioSubject.asObservable();
}

  salvaToken(token: string){
  this.tokenService.salvaToken(token);
  this.decodificaJWT();
}
  private verificarExp(expFromClaims: string){
    const time = Math.floor((new Date).getTime() / 1000)
    const exp = parseInt(expFromClaims)
    return time >= exp

  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    let usuario = jwt_decode(token) as Usuario;
    if (this.verificarExp(usuario.exp ?? '')){
      this.logout()
    } else {
    this.usuarioSubject.next(usuario);
    }
  }


  estaLogado(){
    return this.tokenService.possuiToken()
  }

  logout(){
    this.tokenService.excluiToken()
    this.usuarioSubject.next({})
  }

  publicarPost(post: any){
    return this.httpClient.post(this.url + "/api/user/post", {post_data: post})
  }

}
