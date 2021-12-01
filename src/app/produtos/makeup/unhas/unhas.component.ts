import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unhas',
  templateUrl: './unhas.component.html',
  styleUrls: ['./unhas.component.css']
})
export class UnhasComponent implements OnInit {

  itens:any=[
    {
      produto: 'Puppy Violet - Esmalte Cremoso 9ml'
    },
    {
      produto: 'This is Me 01 Freaky - Esmalte 8ml'
    },
    {
      produto: 'GRANADO Removedor de Esmalte Pink 75ml'
    },
    {
      produto: 'Esmalte Cremoso Rouge Vernis 999 Rouge 10ml'
    },
    {
      produto: 'Removedor de Esmalte em Caneta Nail Polish Corrector 4,5ml'
    },
    {
      produto: 'Esmalte Endurecedor para Unhas Scientifique 5ml'
    },
    {
      produto: 'Óleo Secante para Esmalte Nail Art Express Dry Drops 8ml'
    },
    {
      produto: 'Shine, Last & Go 29 Zero To Hero - Esmalte Cremoso 8ml'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
