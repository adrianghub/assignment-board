import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'koia-layout-header',
  template: `
    <koia-button
      *ngIf="backUrl"
      icon="arrow-left"
      class="back-arrow"
      (clicked)="redirectBack(backUrl)"
    />

    <div class="actions">
      <ng-content [actions]></ng-content>
    </div>
  `,
  styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent {
  @Input() backUrl?: string;

  constructor(private router: Router) {}

  redirectBack(backUrl: string): void {
    this.router.navigateByUrl(backUrl);
  }
}
