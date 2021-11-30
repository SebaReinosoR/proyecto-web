import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componentes/./header/header.component';
import { InicioSesionComponent } from './componentes/./inicio-sesion/inicio-sesion.component';
import { PerfilComponent } from './componentes/./perfil/perfil.component';
import { CertificadosComponent } from './componentes/./certificados/certificados.component';
import { CursosComponent } from './componentes/./cursos/cursos.component';
import { EmpleoComponent } from './componentes/./empleo/empleo.component';
import { NotificacionComponent } from './componentes/./notificacion/notificacion.component';
import { RegistroComponent } from './componentes/./registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioSesionComponent,
    PerfilComponent,
    CertificadosComponent,
    CursosComponent,
    EmpleoComponent,
    NotificacionComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
