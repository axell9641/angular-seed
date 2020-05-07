import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import * as fromComponents from './components';
import * as fromModulesMaterial from './dependencies/material';
import * as fromDirectives from './directives';
import * as fromPipes from './pipes';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.Pipes,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...fromModulesMaterial.modules,
  ],
  exports: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.Pipes,
  ],
})
export class SharedModule {}
