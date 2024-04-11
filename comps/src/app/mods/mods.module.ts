import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ModsHomeComponent],
  imports: [CommonModule, ModsRoutingModule, SharedModule],
  exports: [],
})
export class ModsModule {}
