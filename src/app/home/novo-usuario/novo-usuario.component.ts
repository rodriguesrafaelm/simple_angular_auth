
import { pipe, tap, map } from 'rxjs';
import { NovoUsuarioService } from './novo-usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { senhasDiferentesValidator } from './validators/senhasDiferentes.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;
  usernameStatus: any = {message: ''};

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private novoUsuarioService: NovoUsuarioService
  ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email],],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['']
    },
      {
        validators: [senhasDiferentesValidator]
      }
    )
  }



  cadastrar(){
    if (this.novoUsuarioForm.valid){
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario).subscribe(
        {
          next: () => {
            this.router.navigate(['dashboard'])
          },
          error: (err) => console.log(err?.error?.errors)
        }
      )
    }
  }

  verificarDisponibilidade(usuario: string){
    if (usuario.length > 4){
    this.novoUsuarioService.consultarDisponibilidadeUsuario(usuario)
    .pipe(map((value) => this.usernameStatus = value))
    .subscribe({
      next: () => this.usernameStatus = this.usernameStatus.message
    }
    )
    if (this.usernameStatus == 'true'){
      this.novoUsuarioForm.controls['username'].setErrors({'usuarioIndisponivel': false})
    }
    if (this.usernameStatus == 'false'){
      this.novoUsuarioForm.controls['username'].setErrors(null)
    }
  }
  }

}
