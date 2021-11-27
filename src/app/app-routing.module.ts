import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { empty } from 'rxjs';
import { CertificadosComponent } from './componentes/certificados/certificados.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { EmpleoComponent } from './componentes/empleo/empleo.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { NotificacionComponent } from './componentes/notificacion/notificacion.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path:"",component:InicioSesionComponent},
  {path:"registro",component:RegistroComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"cursos",component:CursosComponent},
  {path:"certificados",component:CertificadosComponent},
  {path:"empleo",component:EmpleoComponent},
  {path:"notificacion",component:NotificacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
