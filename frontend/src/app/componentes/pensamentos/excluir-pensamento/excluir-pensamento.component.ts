import { Pensamento } from './../pensamento';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css'],
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    _id: '',
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('_id') || '';
    this.service.buscarPorId(_id).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }
  excluirPensamento() {
    if (this.pensamento._id) {
      this.service.excluir(this.pensamento._id).subscribe(() => {
        this.router.navigate(['listarPensamento']);
        console.log('entrou no excluirPensamento caralhoooo');
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
