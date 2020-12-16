import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistroComponent } from './shared/registro/registro.component';
import { GruposComponent } from './home/grupos/grupos.component';
import { UsuariosComponent } from './home/usuarios/usuarios.component';
import { TemasComponent } from './home/temas/temas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    GruposComponent,
    UsuariosComponent,
    TemasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
