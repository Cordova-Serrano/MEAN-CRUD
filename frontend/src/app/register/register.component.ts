import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    const USER: User = {
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
    };
    console.log(USER);
    this.usuarioService.registrarUsuario(USER).subscribe(
      (data) => {
        console.log('Usuario registrado con exito');
        this.router.navigate(['/inventario']);
      },
      (error) => {
        console.log(error);
        this.userForm.reset();
      }
    );
  }
}
