import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from './servicio/registro.service';
import { UsuarioMinimo } from './modelo/usuario-minimo.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public usuarioMin: UsuarioMinimo;
  username: string;
  email: string;
  password: string;
  fechaNacimiento: Date;

  constructor(private registroService: RegistroService, private router: Router) {
     this.usuarioMin = new UsuarioMinimo(this.username, this.email, this.password, this.fechaNacimiento);
  }
  // tslint:disable-next-line:typedef
  registrarUsuario() {
    this.usuarioMin.username = this.username;
    this.usuarioMin.email = this.email;
    this.usuarioMin.password = this.password;
    this.usuarioMin.fechaNacimiento = this.fechaNacimiento;

    this.registroService.registrarUsuarioMinimo(this.usuarioMin).subscribe(
      resp => {
        console.log('El usuario se ha creado correctamente');
        this.router.navigate(['/login']);
      },
      error => {
        if (error.status === 400) {
          console.log('No se ha podido crear el usuario');
        } else if (error.status === 409) {
          console.log('El usuario ya existe');
        }
      }
    );
  }
}
