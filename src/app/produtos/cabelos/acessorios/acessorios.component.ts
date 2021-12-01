import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.css']
})
export class AcessoriosComponent implements OnInit {

  itens:any=[
    {
      produto: 'TANGLE TEEZER'
    },
    {
      produto: 'Escova de Cabelo The Original Panther Black'
    },
    {
      produto: 'OCÉANE'
    },
    {
      produto: 'Prendedor de Cabelo Produtinhos Da Beauty Bungee'
    },
    {
      produto: 'DevaFuser - Difusor de Cabelo'
    },
    {
      produto: 'Titanium Azul - Prancha de Cabelo 330g'
    },
    {
      produto: 'Escova de Cabelo Pro Flex Dry Eletric Dreams Redemoinho'
    },
    {
      produto: 'Back-Combing Pink Embrace - Escova para Volume 84g'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
