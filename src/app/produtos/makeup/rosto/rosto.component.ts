import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rosto',
  templateUrl: './rosto.component.html',
  styleUrls: ['./rosto.component.css']
})
export class RostoComponent implements OnInit {

  itens:any=[
    {
      produto: 'Corretivo Líquido Eraser Ligth 6ml'
    },
    {
      produto: 'Primer Revitalift Blur Mágico 27g'
    },
    {
      produto: 'Efeito Matte Médio - Corretivo Líquido 4g'
    },
    {
      produto: 'Pó Compacto Translúcido Amarelinho para Corretivo 3g'
    },
    {
      produto: 'Corretivo Líquido Eraser Ivory 6ml'
    },
    {
      produto: 'Água Micelar Dermo Expertise  5 em 1 100ml'
    },
    {
      produto: 'Água Micelar Dermo Expertise 5 em 1 400ml'
    },
    {
      produto: 'Água Micelar  Dermo Expertise 5 em 1 200ml'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
