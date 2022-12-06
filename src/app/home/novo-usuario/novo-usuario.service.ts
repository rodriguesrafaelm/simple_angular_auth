import { environment } from './../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  url = environment.apiURL

  constructor(private httpClient: HttpClient) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario): Observable<HttpResponse<any>> {
    return this.httpClient.post(this.url + '/user/signup', novoUsuario, { observe: 'response' })
  }


  consultarDisponibilidadeUsuario(userName: string){
    return this.httpClient.post(this.url + '/user/get-user', {"username": userName})
  }

}
