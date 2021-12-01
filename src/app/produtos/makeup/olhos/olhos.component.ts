import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olhos',
  templateUrl: './olhos.component.html',
  styleUrls: ['./olhos.component.css']
})
export class OlhosComponent implements OnInit {

  itens:any=[
    {
      produto: 'Máscara para Cílios The Colossal VolumExpress Super Filme 9,2ml'
    },
    {
      produto: 'The Colossal VolumExpress Waterproof - Máscara para Cílios 9,2ml'
    },
    {
      produto: 'Caneta Delineadora Rica de Marré Preto Lacre 1,2ml'
    },
    {
      produto: 'Primer para Cílios Volume Booster 7ml'
    },
    {
      produto: 'Máscara para Cílios Volume Stylist 18h Curl & Hold 12ml'
    },
    {
      produto: 'Máscara para Cílios Lash Sensational 9,5ml'
    },
    {
      produto: 'Sombra Cintilante Pó Frozen 1,5g'
    },
    {
      produto: 'Máscara para Cílios BT Glam Lashes 8g'
    },
    {
      produto: 'Lenço Demaquilante Sensibio H2O Calmante & Hidratante (25 unidades)'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
