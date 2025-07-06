import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent {
  @Input() check = false;

  @Output() onCheckChanged = new EventEmitter<boolean>();

  checkChanged($event: any) {
    this.onCheckChanged.emit($event?.target?.checked);
  }
}
