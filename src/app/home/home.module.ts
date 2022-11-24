import { MensagensModule } from './../componentes/mensagens/mensagens.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NovoUsuarioComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MensagensModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
