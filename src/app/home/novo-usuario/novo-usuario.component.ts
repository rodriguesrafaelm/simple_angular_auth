import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { map } from 'rxjs';
import { NovoUsuarioService } from './novo-usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { senhasDiferentesValidator } from './validators/senhasDiferentes.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  usernameStatus: any = { message: true };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        password2: [''],
      },
      {
        validators: [senhasDiferentesValidator],
      }
    );
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario)
      .subscribe({
        next: (res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(authToken)
          this.router.navigate(['dashboard']);
        },
        error: (err) => console.log("Ocorreu um erro."),
      });
    }
  }

  verificarDisponibilidade(usuario: string) {
    if (usuario.length > 4) {
      this.novoUsuarioService
        .consultarDisponibilidadeUsuario(usuario)
        .pipe(map((value) => (this.usernameStatus = value)))
        .subscribe({
          next: () =>
            this.usernameStatus.message
              ? this.novoUsuarioForm.controls['username'].setErrors(null)
              : this.novoUsuarioForm.controls['username'].setErrors({
                  usuarioIndisponivel: true,
                }),
        });
    }
  }
}
