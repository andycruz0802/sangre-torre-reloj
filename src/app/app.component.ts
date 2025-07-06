import { Component } from '@angular/core';
import { LeftBoardComponent } from './components/left-board/left-board.component';
import { SectionPreparacionComponent } from './components/section-preparacion/section-preparacion.component';
import { SectionNightOrderComponent } from './components/section-night-order/section-night-order.component';
import { SingletonService } from './services/singleton/singleton.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blood-clocktower';

  public componenteMap: Record<string, any> = {
    Preparación: SectionPreparacionComponent,
    Grimorio: LeftBoardComponent,
    'Orden Nocturno': SectionNightOrderComponent,
  };

  constructor(public singletonService: SingletonService) {
    if (localStorage.getItem('isGameStarted')) {
      this.singletonService.sections = JSON.parse(
        localStorage.getItem('sections') as string
      );
      this.singletonService.players = JSON.parse(
        localStorage.getItem('players') as string
      );
    }
  }

  toggleSection(section: any) {
    const index = this.singletonService.sections.findIndex(
      (s) => s.name === section.name
    );

    if (index > 0) {
      const prevSection = this.singletonService.sections[index - 1];
      if (!prevSection.completed) {
        alert(`Debes completar "${prevSection.name}" antes de continuar.`);
        return;
      }
    }

    section.opened = !section.opened;
  }

  // Llama a esto cuando la sección termine
  markSectionCompleted(sectionName: string) {
    const section = this.singletonService.sections.find(
      (s) => s.name === sectionName
    );
    if (section) {
      section.completed = true;
      section.opened = false; // opcional: cerrarlo cuando termine
    }
  }

  isDisabled(section: any): boolean {
    const index = this.singletonService.sections.findIndex(
      (s) => s.name === section.name
    );
    if (index === 0) return false;
    return !this.singletonService.sections[index - 1].completed;
  }

  // public sections = [
  //   { name: 'Preparación', opened: false },
  //   { name: 'Grimorio', opened: false },
  //   { name: 'Orden Nocturno', opened: false },
  // ];

  // public componenteMap: Record<string, any> = {
  //   Preparación: SectionPreparacionComponent,
  //   Grimorio: LeftBoardComponent,
  //   'Orden Nocturno': SectionNightOrderComponent,
  // };

  // toggleSection(seccion: any) {
  //   seccion.opened = !seccion.opened;
  // }
}
