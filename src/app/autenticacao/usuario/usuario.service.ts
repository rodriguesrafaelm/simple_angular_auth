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

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
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
