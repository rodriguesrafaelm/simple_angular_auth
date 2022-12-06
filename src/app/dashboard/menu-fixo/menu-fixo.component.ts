import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-fixo',
  templateUrl: './menu-fixo.component.html',
  styleUrls: ['./menu-fixo.component.css']
})
export class MenuFixoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.usuarioService.logout()
    this.router.navigate([''])
  }

}
