import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CanalesComponent } from './vistas2/canales/canales.component';
import { CanalComponent } from './vistas2/canales/canal/canal.component';
import { AppRoutingModule } from './app-routing.module';
import { ImagenComponent } from './vistas2/imagen/imagen.component';
import { TextoComponent } from './vistas2/texto/texto.component';
import { PaginaNoEncontradaComponent } from './vistas2/pagina-no-encontrada/pagina-no-encontrada.component';
import {HttpClientModule} from '@angular/common/http';
import { EntradaService } from './shared2/servicios2/entrada.service';
import { MinionComponent } from './minions/minion/minion.component';
import { MinionsComponent } from './minions/minions.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './vistas2/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    CanalesComponent,
    CanalComponent,
    ImagenComponent,
    TextoComponent,
    PaginaNoEncontradaComponent,  
    MinionsComponent,
    MinionComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EntradaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
