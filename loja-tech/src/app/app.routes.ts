import { Routes } from '@angular/router';

import { Vitrine } from './pages/vitrine/vitrine';
import { ProdutoDetalhe } from './pages/produto-detalhe/produto-detalhe';
import { Carrinho } from './pages/carrinho/carrinho';
import { NaoEncontrada } from './pages/nao-encontrada/nao-encontrada';

export const routes: Routes = [
  {
    path: '', redirectTo: 'vitrine', pathMatch: 'full'
  },

  {
    path: 'vitrine',
    component: Vitrine
  },

  {
    path: 'carrinho',
    component: Carrinho
  },

  // Rota dinâmica
  {
    path: 'produto/:id',
    component: ProdutoDetalhe
  },

  // Rota 404
  {
    path: '**',
    component: NaoEncontrada
  }
];