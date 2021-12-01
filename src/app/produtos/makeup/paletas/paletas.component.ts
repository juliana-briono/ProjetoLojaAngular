import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paletas',
  templateUrl: './paletas.component.html',
  styleUrls: ['./paletas.component.css']
})
export class PaletasComponent implements OnInit {
  itens:any=[
    {
      produto: 'Paleta de Sombras Resort Lunar 9g'
    },
    {
      produto: 'Sobretudo - Paleta de Sombras 9g'
    },
    {
      produto: 'Paleta de Sombras Nádia Tambasco By Glow to Go 17,1g'
    },
    {
      produto: '24 - Paleta de Sombras 28g'
    },
    {
      produto: 'Paleta de Sombras Nádia Tambasco by To Go Basic 7,2g'
    },
    {
      produto: 'Paleta de Sombras Nádia Tambasco by To Go Matte 7,2g'
    },
    {
      produto: 'Paleta de Iluminadores Nádia Tambasco By Glow to Go 16,9g'
    },
    {
      produto: 'Paleta de Sombras Nádia Tambasco by To Go Fire 7,2g'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
