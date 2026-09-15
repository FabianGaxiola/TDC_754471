import { Component, signal } from '@angular/core';
import { ListPanel } from './components/list-panel/list-panel';
import { DetailPanel } from './components/detail-panel/detail-panel';

@Component({
  selector: 'app-root',
  imports: [ListPanel, DetailPanel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly titles = [
    'Cien años de soledad',
    'El principito',
    '1984',
    'Don Quijote de la Mancha',
    'La sombra del viento',
  ];

  selectedTitle = signal<string | null>(null);

  selectTitle(title: string): void {
    this.selectedTitle.set(title);
  }

  clearSelection(): void {
    this.selectedTitle.set(null);
  }
}