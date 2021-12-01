import { AmadeiradoComponent } from './produtos/perfumes/amadeirado/amadeirado.component';
import { FrutalComponent } from './produtos/perfumes/frutal/frutal.component';
import { FloralComponent } from './produtos/perfumes/floral/floral.component';
import { CitricoComponent } from './produtos/perfumes/citrico/citrico.component';
import { PerfumesComponent } from './produtos/perfumes/perfumes.component';
import { PaletasComponent } from './produtos/makeup/paletas/paletas.component';
import { UnhasComponent } from './produtos/makeup/unhas/unhas.component';
import { PinceisComponent } from './produtos/makeup/pinceis/pinceis.component';
import { RostoComponent } from './produtos/makeup/rosto/rosto.component';
import { OlhosComponent } from './produtos/makeup/olhos/olhos.component';
import { MakeupComponent } from './produtos/makeup/makeup.component';
import { AcessoriosComponent } from './produtos/cabelos/acessorios/acessorios.component';
import { ColoracaoComponent } from './produtos/cabelos/coloracao/coloracao.component';
import { TratamentosComponent } from './produtos/cabelos/tratamentos/tratamentos.component';
import { CondicionadorComponent } from './produtos/cabelos/condicionador/condicionador.component';
import { ShampooComponent } from './produtos/cabelos/shampoo/shampoo.component';
import { CabelosComponent } from './produtos/cabelos/cabelos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'cabelos', component: CabelosComponent },
  {path: 'cabelos/shampoo', component: ShampooComponent },
  {path: 'cabelos/condicionador',component: CondicionadorComponent },
  {path: 'cabelos/tratamentos', component: TratamentosComponent },
  {path: 'cabelos/coloracao', component: ColoracaoComponent },
  {path: 'cabelos/acessorios', component: AcessoriosComponent },
  {path: 'makeup', component: MakeupComponent  },
  {path: 'makeup/olhos', component: OlhosComponent },
  {path: 'makeup/rosto', component: RostoComponent },
  {path: 'makeup/pinceis', component: PinceisComponent },
  {path: 'makeup/unhas', component: UnhasComponent },
  {path: 'makeup/paletas', component: PaletasComponent },
  {path: 'perfumes', component: PerfumesComponent },
  {path: 'perfumes/citrico', component: CitricoComponent },
  {path: 'perfumes/floral', component: FloralComponent },
  {path: 'perfumes/frutal', component: FrutalComponent },
  {path: 'perfumes/amadeirado', component: AmadeiradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
