import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = 'http://localhost:4000/api/registro';
  url_ = 'http://localhost:4000/api/inicio';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: User): Observable<any> {
    return this.http.post(this.url, usuario);
  }

  loggearUsuario(usuario: User): Observable<any> {
    return this.http.post(this.url_, usuario);
  }
}
