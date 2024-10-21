import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreRamaIzquierdaComponent } from './padre-rama-izquierda/padre-rama-izquierda.component';
import { PadreRamaDerechaComponent } from './padre-rama-derecha/padre-rama-derecha.component';
import { HijounoRamaIzquierdaComponent } from './padre-rama-izquierda/hijouno-rama-izquierda/hijouno-rama-izquierda.component';
import { HijodosRamaIzquierdaComponent } from './padre-rama-izquierda/hijodos-rama-izquierda/hijodos-rama-izquierda.component';
import { NietoComponent } from './padre-rama-izquierda/hijouno-rama-izquierda/nieto/nieto.component';
import { TitoComponent } from './padre-rama-derecha/tito/tito.component';
import { MariaComponent } from './padre-rama-derecha/maria/maria.component';
import { PepaComponent } from './padre-rama-derecha/pepa/pepa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PadreRamatreComponent } from './padre-ramatre/padre-ramatre.component';
import { LoginComponent } from './padre-ramatre/login/login.component';
import { DetalisComponent } from './padre-ramatre/detalis/detalis.component';

import { PadreRamacuatroComponent } from './padre-ramacuatro/padre-ramacuatro.component';
import { HijoDecuatroComponent } from './padre-ramacuatro/hijo-decuatro/hijo-decuatro.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreRamaIzquierdaComponent,
    PadreRamaDerechaComponent,
    HijounoRamaIzquierdaComponent,
    HijodosRamaIzquierdaComponent,
    NietoComponent,
    TitoComponent,
    MariaComponent,
    PepaComponent,
    PadreRamatreComponent,
    LoginComponent,
    DetalisComponent,
    PadreRamacuatroComponent,
    HijoDecuatroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
