import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = { // o Decorator @Input diz pro angular que agora esse componente irá receber informações do componente pai 'listarPensamento'
    _id: '',
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
}
  constructor() {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
