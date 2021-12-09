import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanalesComponent } from './vistas2/canales/canales.component' ;
import { ImagenComponent } from './vistas2/imagen/imagen.component' ;
import { TextoComponent } from './vistas2/texto/texto.component';
import { PaginaNoEncontradaComponent } from './vistas2/pagina-no-encontrada/pagina-no-encontrada.component'
import { MinionComponent } from './minions/minion/minion.component';
import { MinionsComponent } from './minions/minions.component';
import { LoginComponent } from './vistas2/login/login.component';


const routes: Routes = [
  { path: 'canales', component: CanalesComponent },
  { path: 'texto', component: TextoComponent },
  { path: 'imagen', component: ImagenComponent },
  { path: 'minion', component: MinionComponent },
  { path: 'minions', component: MinionsComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/minions', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
  ];




@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
 
})
export class AppRoutingModule { }
