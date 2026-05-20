import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <h2>Produtos em Destaque</h2>

    <div *ngFor="let prod of produtos">
      <h4>{{ prod.nome }}</h4>
      <p>R$ {{ prod.preco }}</p>

      <button [routerLink]="['/produto', prod.id]">
        Ver Detalhes
      </button>
    </div>
  `
})

export class Vitrine {
  produtos = [
    { id: 1, nome: 'Notebook Gamer', preco: 5000 },
    { id: 2, nome: 'Mouse Sem Fio', preco: 150 },
    { id: 3, nome: 'Teclado Mecânico', preco: 300 }
  ];
}