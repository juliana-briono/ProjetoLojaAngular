import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amadeirado',
  templateUrl: './amadeirado.component.html',
  styleUrls: ['./amadeirado.component.css']
})
export class AmadeiradoComponent implements OnInit {
  itens:any=[
    {
      produto: 'PACO RABANNE 1 Million Lucky Eau de Toilette - Perfume Masculino 100ml'
    },
    {
      produto: 'PACO RABANNE Perfume Masculino 1 Million Eau de Toilette 200ml'
    },
    {
      produto: 'PACO RABANNE Invictus Legend Eau de Parfum - Perfume Masculino 50ml'
    },
    {
      produto: 'HUGO BOSS Boss Bottled Night Eau de Toilette - Perfume Masculino 50ml'
    },
    {
      produto: "ISSEY MIYAKE L'Eau Majeure d'Issey Eau de Toilette - Perfume Masculino 50ml"
    },
    {
      produto: 'RALPH LAUREN Polo Red Eau de Toilette - Perfume Masculino 200ml'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
