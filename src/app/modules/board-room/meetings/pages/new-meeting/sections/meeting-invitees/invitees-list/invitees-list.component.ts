import { Component, Input } from '@angular/core';
import { Invitee } from '../../../../../models/meetings.mode';

@Component({
  selector: 'koia-invitees-list',
  template: `
    <div class="top-wrapper">
      <mat-checkbox
        class="select-all checkbox"
        [checked]="isAllSelected"
        (change)="toggleSelectAll()"
      >
        <span class="regular-title-medium">{{
          'newMeeting.section.meetingInvitees.checkbox.all' | translate
        }}</span>
      </mat-checkbox>
    </div>

    <ng-container *ngFor="let invitee of invitees">
      <div
        (click)="toggleSelection(invitee)"
        (keypress)="toggleSelection(invitee)"
        [tabindex]="invitee.id"
        class="wrapper"
      >
        <label [for]="'checkbox-' + invitee.id">
          <div class="content-wrapper">
            <mat-checkbox
              [id]="'checkbox-' + invitee.id"
              (change)="toggleSelection(invitee)"
              [checked]="!!selected.get(invitee.id)"
              class="checkbox"
            ></mat-checkbox>

            <div class="content">
              <span class="regular-title-medium">{{ invitee.name }}</span>
              <span class="regular-body-medium invitee-position">{{
                invitee?.position ?? ''
              }}</span>
            </div>
          </div>
        </label>
      </div>
    </ng-container>
  `,

  styleUrls: ['./invitees-list.component.scss'],
})
export class InviteesListComponent {
  @Input({ required: true }) invitees!: Invitee[];

  selected = new Map<number, Invitee>();

  get isAllSelected(): boolean {
    return (
      this.invitees.length > 0 && this.invitees.length === this.selected.size
    );
  }

  toggleSelection(invitee: Invitee): void {
    if (this.selected.has(invitee.id)) {
      this.selected.delete(invitee.id);
    } else {
      this.selected.set(invitee.id, invitee);
    }
  }

  toggleSelectAll() {
    if (this.isAllSelected) {
      this.selected.clear();
    } else {
      this.invitees.forEach((invitee) =>
        this.selected.set(invitee.id, invitee)
      );
    }
  }
}
