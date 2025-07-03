import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, HostListener, OnInit } from '@angular/core';
import { ALL_ROLES_1ST_EXP, Pieza } from 'src/assets/roles/expansion1';

@Component({
  selector: 'app-left-board',
  templateUrl: './left-board.component.html',
  styleUrls: ['./left-board.component.scss'],
})
export class LeftBoardComponent implements OnInit {
  public piezas: Pieza[] = ALL_ROLES_1ST_EXP;
  public holdTimeout: any;
  public isEditMode: boolean = true;

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (
      !target.closest('.tablero') ||
      target.classList.contains('delete-btn')
    ) {
      return;
    }

    this.closeAllDeleteButtons();
  }

  constructor() {}

  ngOnInit() {
    console.log(this.piezas);
    this.loadState();
  }

  onDragEnded(event: CdkDragEnd, pieza: Pieza) {
    const pos = event.source.getFreeDragPosition();
    pieza.x = pos.x;
    pieza.y = pos.y;
    pieza.showDelete = false;
    this.saveState();
  }

  saveState() {
    localStorage.setItem('tablero', JSON.stringify(this.piezas));
  }

  loadState() {
    const data = localStorage.getItem('tablero');
    if (data) {
      this.piezas = JSON.parse(data);
    }
  }

  onRightClick(event: MouseEvent, pieza: any) {
    event.preventDefault(); // Previene el menú contextual del navegador
    pieza.showDelete = true;
  }

  onMouseDown(event: MouseEvent, pieza: any) {
    // Solo para táctil o click
    this.holdTimeout = setTimeout(() => {
      pieza.showDelete = true;
    }, 600); // 600 ms: tiempo para considerar "mantener pulsado"
  }

  onMouseUp() {
    clearTimeout(this.holdTimeout);
  }

  removePieza(pieza: any) {
    // Puedes eliminar del array o simplemente ocultar
    pieza.showDelete = false;
    pieza.visible = false;
    pieza.x = 0; // Por ejemplo: resetear posición
    pieza.y = 0;
    this.saveState();
    // O eliminarla del array si quieres: this.piezas = this.piezas.filter(p => p !== pieza);
  }

  closeAllDeleteButtons() {
    this.piezas.forEach((p) => (p.showDelete = false));
  }

  getVisiblesPiezas() {
    return this.piezas.filter((pieza) => pieza.visible);
  }
}
