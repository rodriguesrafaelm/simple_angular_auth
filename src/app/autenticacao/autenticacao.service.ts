import { UsuarioService } from './usuario/usuario.service';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  url = environment.apiURL

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }


  autenticar(userName: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(
      this.url + '/user/login',
      {
        username: userName,
        password: password
      },
      { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';

        this.usuarioService.salvaToken(authToken)
      })
    )
  }

}
