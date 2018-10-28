import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NuevoUsuarioComponent } from './componentes/nuevo-usuario/nuevo-usuario.component';
import { NuevaPeliculaComponent } from './componentes/nueva-pelicula/nueva-pelicula.component';
import { ModPeliculaComponent } from './componentes/mod-pelicula/mod-pelicula.component';
import { ModUsuarioComponent } from './componentes/mod-usuario/mod-usuario.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { ListaPeliculasComponent } from './componentes/lista-peliculas/lista-peliculas.component';
import { DevolverComponent } from './componentes/devolver/devolver.component';
import { AlquilarComponent } from './componentes/alquilar/alquilar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { DevolucionComponent } from './componentes/devolucion/devolucion.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ListaEditarComponent } from './componentes/lista-editar/lista-editar.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { HistorialTotalComponent } from './componentes/historial-total/historial-total.component';

export const routes: Routes = [
    {   path: 'login' , component: LoginComponent},
    {   path: 'newuser' , component: NuevoUsuarioComponent},
    {   path: 'newpelicula', component: NuevaPeliculaComponent },
    {   path: 'editar_pelicula/:id', component: ModPeliculaComponent },
    {   path: 'editar_usuario/:id', component: ModUsuarioComponent },
    {   path: 'lista_usuarios', component: ListaUsuariosComponent },
    {   path: 'lista_peliculas', component: ListaPeliculasComponent},
    {   path: 'lista_editar', component:ListaEditarComponent },
    {   path: 'devolver', component: DevolverComponent},
    {   path: 'devolver/:id', component: DevolucionComponent},
    {   path: 'alquilar', component: AlquilarComponent},
    {   path: 'historial', component: HistorialTotalComponent },
    {   path: 'historial/:id', component: HistorialComponent },
    {   path: 'alquilar/:id', component: AlquilarComponent },
    {   path: 'perfil', component: PerfilComponent},
    {   path: 'admin', component: AdminComponent},
    {   path: '' , component: InicioComponent},
    {   path: '**', redirectTo: ''}

]