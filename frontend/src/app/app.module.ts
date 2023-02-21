import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { FormsModule } from '@angular/forms';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';
import { ListarPensamentoComponent } from '../app/componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from '../app/componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ExcluirPensamentoComponent } from '../app/componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from '../app/componentes/pensamentos/editar-pensamento/editar-pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PensamentoComponent,
    ListarPensamentoComponent,
    CriarPensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
