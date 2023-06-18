import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MeetingType } from '../../../../models/meetings.mode';

@Component({
  selector: 'koia-meeting-types',
  template: `
    <koia-selectable-button-group
      [items]="types"
      (selected)="emitSelectedType($event)"
    ></koia-selectable-button-group>
  `,
})
export class MeetingTypesComponent {
  @Input() types!: MeetingType[];

  @Output() selected = new EventEmitter<MeetingType>();

  emitSelectedType(type: MeetingType): void {
    this.selected.emit(type);
  }
}
