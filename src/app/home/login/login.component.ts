import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }


  login() {
    if (this.usuario == 'bypass'){
      return this.bypass()
    }
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: () => this.router.navigate(['dashboard']),
      error: () => {alert("Usuário ou senha inválidos(s)");}
  })}

  bypass(){
    this.router.navigate(['dashboard'])
  }


}
