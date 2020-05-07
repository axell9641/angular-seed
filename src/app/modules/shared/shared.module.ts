import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import * as fromComponents from './components';
import * as fromMaterialModules from './dependencies/material';
import * as fromDirectives from './directives';
import * as fromPipes from './pipes';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...fromMaterialModules.modules,
  ],
  exports: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
    ...fromMaterialModules.modules,
  ],
})
export class SharedModule {}
