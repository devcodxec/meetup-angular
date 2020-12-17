import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent} from './shared/footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './shared/login/login.component';
import { RegistroComponent } from './shared/registro/registro.component';
import { GruposComponent } from './home/grupos/grupos.component';
import { UsuariosComponent } from './home/usuarios/usuarios.component';
import { TemasComponent } from './home/temas/temas.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
