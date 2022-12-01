
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode'
import { Usuario } from 'src/app/autenticacao/usuario/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private usuarioSubject = new BehaviorSubject<Usuario>({})

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken())
      this.decodificaJWT()
   }


  retornaClaims(){
    const token = this.tokenService.retornaToken()
    try {
      return jwt_decode(token)
    } catch(error){
      return null
    }
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

}
