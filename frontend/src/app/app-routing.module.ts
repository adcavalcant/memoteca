import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component'

const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'listarPensamento', component: ListarPensamentoComponent },
  { path: 'criarPensamento', component: CriarPensamentoComponent },
  { path: 'pensamentos/excluirPensamento/:_id', component: ExcluirPensamentoComponent},
  { path: 'pensamentos/editarPensamento/:_id', component: EditarPensamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
