import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.html',
})
export class DetailPanel {
  @Input() selectedTitle: string | null = null;

  @Output() selectionCleared = new EventEmitter<void>();

  clearSelection(): void {
    this.selectionCleared.emit();
  }
}