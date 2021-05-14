import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent} from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistroComponent } from './shared/registro/registro.component';
import { GruposComponent } from './home/grupos/grupos.component';
import { UsuariosComponent } from './home/usuarios/usuarios.component';
import { TemasComponent } from './home/temas/temas.component';
// Importamos los Módulos
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// Importamos los servicios
import { RegistroService } from './shared/registro/servicio/registro.service';
import { HttpService } from './core/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    GruposComponent,
    UsuariosComponent,
    TemasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [
    RegistroService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
