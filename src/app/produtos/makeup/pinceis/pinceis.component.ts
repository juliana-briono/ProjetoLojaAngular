import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinceis',
  templateUrl: './pinceis.component.html',
  styleUrls: ['./pinceis.component.css']
})
export class PinceisComponent implements OnInit {

  itens:any=[
    {
      produto: 'Setting - Pincel para Maquiagem'
    },
    {
      produto: 'Pincel para Corretivo Concealer'
    },
    {
      produto: 'Kit 24 Eyeshadow Palette & Pincel (2 Produtos)'
    },
    {
      produto: 'Esponja para Maquiagem Black'
    },
    {
      produto: 'Pincel de Maquiagem Glam Chanfrado F17'
    },
    {
      produto: 'Kit Multi Shaper Combo de Navalhas (4 Unidades)'
    },
    {
      produto: 'Esponja para Maquiagem Mariana Saad by Flat Blend'
    },
    {
      produto: 'Kit Esponja para Maquiagem Mariana Saad By Flat Blend Duo (2 Unidades)'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
