import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { Tab } from 'src/app/shared/models/shared.model';

@Component({
  standalone: true,
  selector: 'koia-tabs',
  template: `
    <nav mat-tab-nav-bar [tabPanel]="tabPanel" [mat-stretch-tabs]="false">
      <ng-container *ngFor="let tab of tabs; let i = index">
        <a
          mat-tab-link
          [active]="tab.active"
          (click)="toggleActive(tab)"
          (keypress)="toggleActive(tab)"
          [tabindex]="i"
        >
          {{ tab.translationKey + '.tab.' + tab.name | translate }}
        </a>
      </ng-container>
    </nav>
    <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatTabsModule, TranslateModule],
})
export class TabsComponent {
  @Input() tabs: Tab[] = [];

  @Output() selected = new EventEmitter<Tab>();

  toggleActive(item: Tab): void {
    this.tabs.forEach((tab) => (tab.active = tab === item ? true : false));

    this.selected.emit(item);
  }
}
