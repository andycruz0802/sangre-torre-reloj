import { Injectable } from '@angular/core';
import { Player } from 'src/app/components/section-preparacion/section-preparacion.component';
import { ALL_ROLES_1ST_EXP, Pieza } from 'src/assets/roles/expansion1';
export interface Section {
  id: number;
  name: string;
  opened: boolean;
  completed: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class SingletonService {
  public roles = ALL_ROLES_1ST_EXP;
  public rolesForCurrentGame: Pieza[] = [];
  public players: Player[] = [];

  public sections: Section[] = [
    { id: 1, name: 'Preparación', opened: false, completed: false },
    { id: 2, name: 'Grimorio', opened: false, completed: false },
    { id: 3, name: 'Orden Nocturno', opened: false, completed: false },
  ];
  // public rolesPorClase: { clase: string, piezas: Pieza[] }[] = [];
  constructor() {}

  getPlayableRoles() {
    return this.roles.filter((rol) => rol.playable);
  }

  getRolesPorClase() {
    const clases: string[] = ['Aldeanos', 'Forasteros', 'Esbirros', 'Demonios'];

    return clases.map((clase) => ({
      clase,
      piezas: ALL_ROLES_1ST_EXP.filter((p) => p.clase === clase),
    }));

    // return this.rolesPorClase
  }

  getTotalNumberOfPlayers() {
    return this.players?.length;
  }
}
