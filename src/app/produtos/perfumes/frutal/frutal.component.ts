import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frutal',
  templateUrl: './frutal.component.html',
  styleUrls: ['./frutal.component.css']
})
export class FrutalComponent implements OnInit {
  itens:any=[
    {
      produto: 'LANCÔME  La Vie Est Belle En Rose Eau de Toilette - Perfume Feminino 100ml'
    },
    {
      produto: 'BURBERRY  Perfume Brit Feminino Eau de Toilette 50ml'
    },
    {
      produto: 'PACHA IBIZA Sexy Eau de Toilette - Perfume Feminino 80ml'
    },
    {
      produto: 'BRITNEY SPEARS Fantasy Eau de Parfum - Perfume Feminino 100ml'
    },
    {
      produto: 'HUGO BOSS Perfume Hugo Man Eau de Toilette Masculino 200ml'
    },
    {
      produto: 'BRITNEY SPEARS Fantasy Eau de Toilette - Perfume Feminino 30ml'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
