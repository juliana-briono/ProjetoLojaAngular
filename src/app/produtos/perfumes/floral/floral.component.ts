import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floral',
  templateUrl: './floral.component.html',
  styleUrls: ['./floral.component.css']
})
export class FloralComponent implements OnInit {
  itens:any=[
    {
      produto: 'CAROLINA HERRERA Perfume 212 Vip Rosé Eau de Parfum Feminino 30ml'
    },
    {
      produto: 'NINA RICCI Perfume Nina Eau de Toilette Feminino 30ml'
    },
    {
      produto: 'DIOR Forever and Ever Eau de Toilette - Perfume Feminino 100ml'
    },
    {
      produto: 'LANCÔME Perfume La Vie Est Belle Feminino Eau de Parfum 30ml'
    },
    {
      produto: 'LANCÔME Perfume La Vie Est Belle Feminino Eau de Parfum 100ml'
    },
    {
      produto: 'CAROLINA HERRERA Perfume 212 Vip Rosé Eau de Parfum Feminino 125ml'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
