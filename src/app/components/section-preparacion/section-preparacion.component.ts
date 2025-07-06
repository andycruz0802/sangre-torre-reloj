import { StepperOrientation } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Section,
  SingletonService,
} from 'src/app/services/singleton/singleton.service';
import { Pieza } from 'src/assets/roles/expansion1';

export interface Player {
  name: string;
  rol: Pieza;
}

@Component({
  selector: 'app-section-preparacion',
  templateUrl: './section-preparacion.component.html',
  styleUrls: ['./section-preparacion.component.scss'],
})
export class SectionPreparacionComponent {
  public players: Player[] = [];
  public selectedRoles: Pieza[] = [];
  public currentPlayerIndex: number = 0;

  firstFormGroup = this._formBuilder.group({
    players: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    roles: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    public singletonService: SingletonService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  toggleSeleccion(pieza: Pieza) {
    pieza.selected = !pieza.selected;
    if (pieza.selected) {
      this.selectedRoles.push(pieza);
    } else {
      const index = this.selectedRoles.findIndex(
        (p) => p.nombre === pieza.nombre
      );
      this.selectedRoles.splice(index, 1);
    }

    if (
      this.selectedRoles.length ===
      this.singletonService.getTotalNumberOfPlayers()
    ) {
      this.singletonService.rolesForCurrentGame = this.selectedRoles;
      this.secondFormGroup.get('roles')?.setValue('filled');
    } else {
      this.secondFormGroup.get('roles')?.setValue(null);
    }

    console.log(this.selectedRoles);
  }

  nextPlayers() {
    const nombresStr = this.firstFormGroup.get('players')?.value as string;

    this.players = nombresStr
      .split(',')
      .map((name: string) => name.trim())
      .filter((name: string) => name.length > 0)
      .map((name: string) => ({
        name,
      })) as Player[];

    this.singletonService.players = this.players;

    console.log(this.singletonService.players);
  }

  maxReached(): boolean {
    return (
      this.selectedRoles.filter((p) => p.selected).length >=
      this.singletonService.getTotalNumberOfPlayers()
    );
  }

  asignarRol() {
    if (this.currentPlayerIndex >= this.players.length) {
      console.log('Todos los jugadores ya tienen un rol');
      return;
    }

    const jugador = this.players[this.currentPlayerIndex];

    // Asigna un rol aleatorio de los que quedan disponibles
    const rolIndex = Math.floor(Math.random() * this.selectedRoles.length);
    const rolAsignado = this.selectedRoles.splice(rolIndex, 1)[0];

    jugador.rol = rolAsignado;
  }

  onWritePlayer() {
    this.singletonService.roles.forEach((el) => (el.selected = false));
    this.closeGrimoire();
    this.singletonService.rolesForCurrentGame = [];
    this.singletonService.players = [];
    this.selectedRoles = [];
    this.players = [];
  }

  goToNextPlayerToGetRol() {
    this.currentPlayerIndex++;
  }

  goToGrimoire() {
    (
      this.singletonService.sections.find(
        (section) => section.id === 1
      ) as Section
    ).completed = true;
    (
      this.singletonService.sections.find(
        (section) => section.id === 1
      ) as Section
    ).opened = false;
    (
      this.singletonService.sections.find(
        (section) => section.id === 2
      ) as Section
    ).opened = true;

    (
      this.singletonService.sections.find(
        (section) => section.id === 2
      ) as Section
    ).completed = true;

    localStorage.setItem('isGameStarted', 'true');
    localStorage.setItem(
      'sections',
      JSON.stringify(this.singletonService.sections)
    );
    localStorage.setItem(
      'players',
      JSON.stringify(this.singletonService.players)
    );
  }

  closeGrimoire() {
    (
      this.singletonService.sections.find(
        (section) => section.id === 2
      ) as Section
    ).opened = false;

    (
      this.singletonService.sections.find(
        (section) => section.id === 1
      ) as Section
    ).completed = false;
  }
}
