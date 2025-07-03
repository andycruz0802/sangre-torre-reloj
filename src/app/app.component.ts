import { Component } from '@angular/core';
import { LeftBoardComponent } from './components/left-board/left-board.component';
import { SectionPreparacionComponent } from './components/section-preparacion/section-preparacion.component';
import { SectionNightOrderComponent } from './components/section-night-order/section-night-order.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blood-clocktower';

  public sections = [
    { name: 'Preparación', opened: false },
    { name: 'Grimorio', opened: false },
    { name: 'Orden Nocturno', opened: false },
  ];

  public componenteMap: Record<string, any> = {
    Preparación: SectionPreparacionComponent,
    Grimorio: LeftBoardComponent,
    'Orden Nocturno': SectionNightOrderComponent,
  };

  toggleSection(seccion: any) {
    seccion.opened = !seccion.opened;
  }
}
