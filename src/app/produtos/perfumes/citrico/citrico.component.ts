import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citrico',
  templateUrl: './citrico.component.html',
  styleUrls: ['./citrico.component.css']
})
export class CitricoComponent implements OnInit {
  itens:any=[
    {
      produto: '4711 Original Eau de Cologne - Perfume Unissex 200ml'
    },
    {
      produto: 'I-SCENTS Perfume Dublin Eau de Toilette Masculino 100ml'
    },
    {
      produto: 'GRANADO Perfume Bergamota & Flor de Laranjeira Eau de Cologne Unissex 230ml'
    },
    {
      produto: 'CALVIN KLEIN Perfume CK Everyone Unissex Eau de Toilette 100ml'
    },
    {
      produto: 'GRANADO Perfume Verbena Eau de Cologne Unissex 300ml'
    },
    {
      produto: 'PHEBO Limão Siciliano Eau de Cologne - Perfume Unissex 200ml'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
