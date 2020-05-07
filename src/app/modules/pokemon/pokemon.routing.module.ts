import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
