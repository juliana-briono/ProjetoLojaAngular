import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shampoo',
  templateUrl: './shampoo.component.html',
  styleUrls: ['./shampoo.component.css']
})
export class ShampooComponent implements OnInit {

  itens:any=[
    {
      produto: 'Oil Reflections - Óleo Capilar 100ml'
    },
    {
      produto: 'Kit Nutritive Satin Vital (2 Produtos)'
    },
    {
      produto: 'Night Spa - Sérum de Tratamento Noturno 250ml'
    },
    {
      produto: 'Comigo Ninguém Pode - Condicionador Co-Wash 450g'
    },
    {
      produto: 'Finish Hair Protector - Leave-in 250ml'
    },
    {
      produto: 'Kit Serie Expert Nutrifier Trio (3 Produtos)'
    },
    {
      produto: 'Kit Inforcer Duo (2 Produtos)'
    },
    {
      produto: 'Kit L’Óreal Professionnel Nutrifier Duo (2 Produtos)'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
