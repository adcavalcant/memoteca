import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Ela era bruxa, ele era um lobo. Ambos prontos para amar. Ela tão clara, ele tão escuro. Ambos em busca de se encontrar. Ele corria, e ela fugia. A noite ele aparecia com seu uivo dolorido. E ela surgia a iluminar a noite com o luar. A bruxa era vida e o Lobo o destino. Ambos seguiam pro mesmo lugar.',
      autoria: 'Texto > 256 caracteres',
      modelo: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
