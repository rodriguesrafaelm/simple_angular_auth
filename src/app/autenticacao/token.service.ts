import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  retornaToken(){
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string){
    localStorage.setItem(KEY, token)
  }

  possuiToken(){
    return this.retornaToken()
  }

  excluiToken(){
    localStorage.removeItem(KEY)
  }

}
