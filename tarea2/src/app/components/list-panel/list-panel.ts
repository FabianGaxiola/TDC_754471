import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-panel',
  templateUrl: './list-panel.html',
})
export class ListPanel {
  @Input() titles: string[] = [];
  @Input() selectedTitle: string | null = null;

  @Output() titleSelected = new EventEmitter<string>();

  selectTitle(title: string): void {
    this.titleSelected.emit(title);
  }
}