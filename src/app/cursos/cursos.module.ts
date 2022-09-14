import { CursosRoutingModule } from './cursos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [CommonModule, CursosRoutingModule],

  declarations: [CursosComponent],
})
export class CursosModule {}
