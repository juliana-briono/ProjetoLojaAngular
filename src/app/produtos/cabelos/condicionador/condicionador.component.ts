import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicionador',
  templateUrl: './condicionador.component.html',
  styleUrls: ['./condicionador.component.css']
})
export class CondicionadorComponent implements OnInit {

  itens:any=[
    {
      produto: 'Condicionador Genesis Fondant Renforcateur 200ml'
    },
    {
      produto: 'Equilibrium - Condicionador 300ml'
    },
    {
      produto: 'Milagre - Creme de Pentear 450g'
    },
    {
      produto: 'Oil Reflections Luminous Instant - Condicionador 200ml'
    },
    {
      produto: 'Fusion - Condicionador 30ml'
    },
    {
      produto: 'Oil Reflections Luminous - Condicionador 30ml'
    },
    {
      produto: 'Condicionador Reflection Chromatique Fondant 200ml'
    },
    {
      produto: 'Ultra Hydration Plus - Condicionador 300ml'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
