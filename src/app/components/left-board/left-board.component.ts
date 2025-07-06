import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, HostListener, OnInit } from '@angular/core';
import { SingletonService } from 'src/app/services/singleton/singleton.service';
import { ALL_ROLES_1ST_EXP, Pieza } from 'src/assets/roles/expansion1';
import { Player } from '../section-preparacion/section-preparacion.component';

@Component({
  selector: 'app-left-board',
  templateUrl: './left-board.component.html',
  styleUrls: ['./left-board.component.scss'],
})
export class LeftBoardComponent implements OnInit {
  public players: Player[] = [];
  public holdTimeout: any;
  public isEditMode: boolean = true;

  constructor(public singletonService: SingletonService) {}

  ngOnInit() {
    this.loadState();
    console.log(this.players);
  }

  onDragEnded(event: CdkDragEnd, player: Player) {
    const pos = event.source.getFreeDragPosition();
    player.rol.x = pos.x;
    player.rol.y = pos.y;
    player.rol.showDelete = false;
    this.saveState();
  }

  saveState() {
    localStorage.setItem(
      'players',
      JSON.stringify(this.singletonService.players)
    );
  }

  loadState() {
    if (this.singletonService.players) {
      this.players = this.singletonService.players;
      this.saveState();
      return;
    } else {
      const data = localStorage.getItem('players') as string;
      this.players = JSON.parse(data);
    }
  }
}
