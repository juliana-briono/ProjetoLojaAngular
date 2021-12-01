import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tratamentos',
  templateUrl: './tratamentos.component.html',
  styleUrls: ['./tratamentos.component.css']
})
export class TratamentosComponent implements OnInit {
itens:any=[
  {
    produto: 'Nutrição - Máscara Capilar 80g'
  },
  {
    produto: 'Tratamento Reconstrutor Uso Obrigatório 260ml'
  },
  {
    produto: 'Wella Oil Reflections Luminous Magnifying Elixir Sérum - Ampola 3x6ml'
  },
  {
    produto: 'Night Spa - Sérum de Tratamento Noturno 250ml'
  },
  {
    produto: 'Ampola de Nutrição Nutrifier Power 10ml'
  },
  {
    produto: 'Máscara Capilar Genesis Masque Reconstituant 200ml'
  },
  {
    produto: 'Expert Absolut Repair Cortex Lipidium - Ampola Capilar 4x10ml'
  },
  {
    produto: 'Net - Máscara Capilar 550g'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
