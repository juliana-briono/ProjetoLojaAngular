import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PerfumesComponent } from './produtos/perfumes/perfumes.component';
import { MakeupComponent } from './produtos/makeup/makeup.component';
import { CabelosComponent } from './produtos/cabelos/cabelos.component';
import { ShampooComponent } from './produtos/cabelos/shampoo/shampoo.component';
import { CondicionadorComponent } from './produtos/cabelos/condicionador/condicionador.component';
import { TratamentosComponent } from './produtos/cabelos/tratamentos/tratamentos.component';
import { ColoracaoComponent } from './produtos/cabelos/coloracao/coloracao.component';
import { AcessoriosComponent } from './produtos/cabelos/acessorios/acessorios.component';
import { OlhosComponent } from './produtos/makeup/olhos/olhos.component';
import { RostoComponent } from './produtos/makeup/rosto/rosto.component';
import { PinceisComponent } from './produtos/makeup/pinceis/pinceis.component';
import { UnhasComponent } from './produtos/makeup/unhas/unhas.component';
import { PaletasComponent } from './produtos/makeup/paletas/paletas.component';
import { CitricoComponent } from './produtos/perfumes/citrico/citrico.component';
import { FloralComponent } from './produtos/perfumes/floral/floral.component';
import { FrutalComponent } from './produtos/perfumes/frutal/frutal.component';
import { AmadeiradoComponent } from './produtos/perfumes/amadeirado/amadeirado.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PerfumesComponent,
    MakeupComponent,
    CabelosComponent,
    ShampooComponent,
    CondicionadorComponent,
    TratamentosComponent,
    ColoracaoComponent,
    AcessoriosComponent,
    OlhosComponent,
    RostoComponent,
    PinceisComponent,
    UnhasComponent,
    PaletasComponent,
    CitricoComponent,
    FloralComponent,
    FrutalComponent,
    AmadeiradoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
