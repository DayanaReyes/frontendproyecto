import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './componentes/login/login.component';
import {HomeComponent} from './componentes/home/home.component';
import {RegistroComponent} from './componentes/registro/registro.component';
import {AdminComponent} from './componentes/admin/admin.component';
import {UsuarioComponent} from './componentes/usuario/usuario.component';
import {CargarComponent} from './componentes/cargar/cargar.component';
import { AuthGuard } from './guardian/auth.guard';
import { EditarComponent } from './componentes/editar/editar.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AuthGuard], 
    data:{persona:1}
  },
  {
    path: 'cargar',
    component: CargarComponent,
    canActivate:[AuthGuard], 
    data:{persona:1}
  },
  {
    path: 'profile',
    component: UsuarioComponent,
    canActivate:[AuthGuard], 
    data:{persona:2}
  },
  {
    path: 'editar',
    component: EditarComponent,
    canActivate:[AuthGuard], 
    data:{persona:2}

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
