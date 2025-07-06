import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LeftBoardComponent } from './components/left-board/left-board.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SectionPreparacionComponent } from './components/section-preparacion/section-preparacion.component';
import { SectionNightOrderComponent } from './components/section-night-order/section-night-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { ButtonToggleComponent } from './components/shared/button-toggle/button-toggle.component';

const MATERIAL_MODULES = [
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
];
@NgModule({
  declarations: [
    AppComponent,
    LeftBoardComponent,
    ButtonToggleComponent,
    SectionPreparacionComponent,
    SectionNightOrderComponent,
  ],
  imports: [
    MATERIAL_MODULES,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
