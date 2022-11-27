import { Router } from '@angular/router';
import { UsuarioService } from './../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user$ = this.usuarioService.retornaUsuario()

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.user$)
  }


  capitalizeFirstLetter(string_up: any): string {
    return string_up.charAt(0).toUpperCase() + string_up.slice(1);
  }


  logout(){
    this.usuarioService.logout()
    this.router.navigate([''])
  }


}
