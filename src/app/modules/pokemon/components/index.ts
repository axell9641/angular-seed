import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

export * from './pokemon-list/pokemon-list.component';
export * from './pokemon-search/pokemon-search.component';
export * from './pokemon-detail/pokemon-detail.component';

export const components: any[] = [
  PokemonListComponent,
  PokemonSearchComponent,
  PokemonDetailComponent,
];
