import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

export interface Pieza {
  priority: number;
  nombre: string;
  img: string;
  x: number;
  y: number;
  show?: boolean;
}

@Component({
  selector: 'app-left-board',
  templateUrl: './left-board.component.html',
  styleUrls: ['./left-board.component.scss'],
})
export class LeftBoardComponent implements OnInit {
  public piezas: Pieza[] = [
    { priority: 1, nombre: 'Bibliotecario', x: 0, y: 0, img: 'bibliotecario' },
    { priority: 2, nombre: 'Lavandera', x: 0, y: 0, img: 'lavandera' },
  ];

  constructor() {}

  ngOnInit() {
    this.loadState();
  }

  onDragEnded(event: CdkDragEnd, pieza: Pieza) {
    const pos = event.source.getFreeDragPosition();
    pieza.x = pos.x;
    pieza.y = pos.y;
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
}
