import { Component, Input } from '@angular/core';
import { Invitee } from '../../../../../models/meetings.mode';

@Component({
  selector: 'koia-invitees-list',
  template: `
    <div class="top-wrapper">
      <mat-checkbox
        color="primary"
        class="select-all checkbox"
        [checked]="isAllSelected"
        (change)="toggleSelectAll()"
        [disabled]="invitees.length === 0"
      >
        <span class="regular-title-small">{{
          'newMeeting.section.meetingInvitees.checkbox.all' | translate
        }}</span>
      </mat-checkbox>
    </div>

    <ng-container *ngFor="let invitee of invitees">
      <div class="wrapper">
        <div class="content-wrapper">
          <mat-checkbox
            color="primary"
            (change)="toggleSelection(invitee)"
            [checked]="!!selected.get(invitee.id)"
            class="checkbox"
          >
            <div class="content">
              <span class="regular-title-small">{{ invitee.name }}</span>
              <span class="regular-body-small invitee-position">{{
                invitee?.position ?? ''
              }}</span>
            </div>
          </mat-checkbox>
        </div>
      </div>
    </ng-container>
  `,

  styleUrls: ['./invitees-list.component.scss'],
})
export class InviteesListComponent {
  @Input({ required: true }) invitees!: Invitee[];
  @Input() selected = new Map<number, Invitee>();

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
