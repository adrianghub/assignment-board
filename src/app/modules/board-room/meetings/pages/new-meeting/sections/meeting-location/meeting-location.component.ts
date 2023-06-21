import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

type LocationType = 'address' | 'online';

interface LocationItem {
  type: LocationType;
  control: FormControl;
  emitter: EventEmitter<string>;
  checked: boolean;
}

@Component({
  selector: 'koia-meeting-location',
  template: `
    <div class="wrapper" *ngFor="let item of items">
      <div>
        <mat-checkbox
          color="primary"
          class="checkbox"
          (change)="toggleSelection($event, item)"
          [checked]="item.checked"
        >
          <span class="semi-bold-title-medium">{{
            'newMeeting.section.meetingLocation.' + item.type + '.checkbox'
              | translate
          }}</span>
        </mat-checkbox>

        <koia-input
          [control]="item.control"
          [label]="
            'newMeeting.section.meetingLocation.' + item.type + '.input.label'
              | translate
          "
          (changed)="item.emitter.emit($event!)"
          (cleared)="item.emitter.emit('')"
        ></koia-input>
      </div>
    </div>
  `,
  styleUrls: ['./meeting-location.component.scss'],
})
export class MeetingLocationComponent {
  @Output() addressChanged = new EventEmitter<string>();
  @Output() onlineChanged = new EventEmitter<string>();

  items: LocationItem[] = [
    {
      type: 'address',
      control: new FormControl(
        { value: '', disabled: false },
        Validators.required
      ),
      emitter: this.addressChanged,
      checked: true,
    },
    {
      type: 'online',
      control: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.pattern('^https?://.+'),
      ]),
      emitter: this.onlineChanged,
      checked: false,
    },
  ];

  toggleSelection(event: MatCheckboxChange, selectedItem: LocationItem): void {
    if (!event.checked) {
      event.source.checked = true;
      return;
    }

    this.items.forEach((item) => {
      if (item.type !== selectedItem.type) {
        item.checked = false;
        item.control.reset('');
        item.control.disable();
      }
    });

    selectedItem.checked = true;
    selectedItem.control.enable();
  }
}
