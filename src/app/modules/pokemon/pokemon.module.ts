import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PokemonRoutingModule } from './pokemon.routing.module';
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, SharedModule, PokemonRoutingModule],
})
export class PokemonModule {}
