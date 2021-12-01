import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coloracao',
  templateUrl: './coloracao.component.html',
  styleUrls: ['./coloracao.component.css']
})
export class ColoracaoComponent implements OnInit {

  itens:any=[
    {
      produto: 'Oxidante 20 Volumes L’Oréal Professionnel Creme 1 75ml'
    },
    {
      produto: 'Coloração Majirel 5.0 Castanho Claro Natural Profundo 50g'
    },
    {
      produto: 'Ruivosa - Máscara Tonalizante 230g'
    },
    {
      produto: 'Color Perfect 7/0 Louro Médio - Coloração Permanente 60g'
    },
    {
      produto: 'Magic Retouch Castanho Claro - Corretivo de Raiz 75ml'
    },
    {
      produto: 'Tonalizante Diarichesse 3 Castanho Escuro 80g'
    },
    {
      produto: 'Água Oxigenada Igora Royal 20 Volumes 6% 60ml'
    },
    {
      produto: 'Majirel 7.4 Louro Acobreado - Coloração 50g'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
