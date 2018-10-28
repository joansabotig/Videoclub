import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListaPeliculasComponent } from './componentes/lista-peliculas/lista-peliculas.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { NuevaPeliculaComponent } from './componentes/nueva-pelicula/nueva-pelicula.component';
import { NuevoUsuarioComponent } from './componentes/nuevo-usuario/nuevo-usuario.component';
import { ModUsuarioComponent } from './componentes/mod-usuario/mod-usuario.component';
import { ModPeliculaComponent } from './componentes/mod-pelicula/mod-pelicula.component';
import { AlquilarComponent } from './componentes/alquilar/alquilar.component';
import { DevolverComponent } from './componentes/devolver/devolver.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes} from './app.routes';
import { Service1Service } from './servicios/service1.service';
import { Service2Service } from './servicios/service2.service';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { DevolucionComponent } from './componentes/devolucion/devolucion.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ListaEditarComponent } from './componentes/lista-editar/lista-editar.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { HistorialTotalComponent } from './componentes/historial-total/historial-total.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaPeliculasComponent,
    ListaUsuariosComponent,
    NuevaPeliculaComponent,
    NuevoUsuarioComponent,
    ModUsuarioComponent,
    ModPeliculaComponent,
    AlquilarComponent,
    DevolverComponent,
    InicioComponent,
    MenuComponent,
    PerfilComponent,
    DevolucionComponent,
    AdminComponent,
    ListaEditarComponent,
    HistorialComponent,
    HistorialTotalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    Service1Service,
    Service2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
