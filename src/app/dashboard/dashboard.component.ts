import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioService } from './../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user$ = this.usuarioService.retornaUsuario();
  post = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}


  postar() {
    this.usuarioService.publicarPost(this.post).subscribe({
      next: () =>
        this.router
          .navigate(['dashboard/posts'])
          .then(() => window.location.reload()),
    });
  }
}
