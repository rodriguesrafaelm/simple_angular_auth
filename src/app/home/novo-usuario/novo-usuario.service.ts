import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  url = environment.apiURL

  constructor(private httpClient: HttpClient) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpClient.post(this.url + '/user/signup', novoUsuario)
  }


  consultarDisponibilidadeUsuario(userName: string){
    return this.httpClient.post(this.url + '/user/get-user', {"username": userName})
  }

}
