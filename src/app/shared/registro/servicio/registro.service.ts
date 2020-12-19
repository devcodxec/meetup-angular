import {Inject, Injectable} from '@angular/core';
import {HttpService} from '../../../core/http.service';
import {ApiEndpoint} from '../../../home/shared/api-endpoint.model';
import {UsuarioMinimo} from '../modelo/usuario-minimo.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RegistroService{

  private urlUsuarios = 'http://localhost:8080/api/usuariosMin';

  // constructor(private httpService: HttpService) {
  // }
  constructor(private http: HttpClient) {
  }

  // registrarUsuarioMinimo(usuario: UsuarioMinimo): Observable<UsuarioMinimo> {
  //   return this.httpService.post(ApiEndpoint.USUARIOS_MIN, usuario);
  // }

  // tslint:disable-next-line:typedef
  registrarUsuarioMinimo(usuario: UsuarioMinimo) {
    return this.http.post(this.urlUsuarios, usuario);
  }

}
