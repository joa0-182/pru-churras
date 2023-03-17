import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tamanho = 6
  valorAtual = 0

  imgDados = [
    'assets/dice-red.png',
    'assets/dice.gif'
  ];

  imgDado = this.imgDados[0];

  constructor() {}

  jogarDado() {
    this.valorAtual = 0;
    this.valorAtual = Math.floor(Math.random());
    this.valorAtual = this.valorAtual * 6;


    this.imgDado = this.imgDados[1]
    setTimeout(() => {
      this.imgDado
    }, 950);

  }




}
