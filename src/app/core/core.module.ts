import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../shared/ui/atoms/button/button.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent, LayoutHeaderComponent],
  imports: [CommonModule, RouterModule, ButtonComponent],
  exports: [LayoutHeaderComponent],
})
export class CoreModule {}
