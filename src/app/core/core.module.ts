import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../shared/ui/atoms/button/button.component';
import { IconsModule } from './icons/icons.module';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent, LayoutHeaderComponent],
  exports: [LayoutHeaderComponent],
  imports: [CommonModule, RouterModule, IconsModule, ButtonComponent],
})
export class CoreModule {}
