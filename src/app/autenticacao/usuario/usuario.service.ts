
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from "./usuario"
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private usuarioSubject = new BehaviorSubject<Usuario>({})

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken())
      this.decodificaJWT()
   }



  salvaToken(token: string){
  this.tokenService.salvaToken(token);
  this.decodificaJWT();
}

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
    console.log(usuario)
}


  estaLogado(){
    return this.tokenService.possuiToken()
  }

  logout(){
    this.tokenService.excluiToken()
    this.usuarioSubject.next({})
  }

}
