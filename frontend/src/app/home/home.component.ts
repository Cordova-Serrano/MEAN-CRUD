import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const USER: User = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    console.log(USER);
    this.usuarioService.loggearUsuario(USER).subscribe(
      (data) => {
        console.log('Usuario loggeado con exito');
        this.router.navigate(['/inventario']);
      },
      (error) => {
        console.log(error);
        this.loginForm.reset();
      }
    );
  }

  ngOnInit(): void {}
}
