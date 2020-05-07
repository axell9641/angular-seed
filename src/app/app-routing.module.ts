import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'welcome', component: AppComponent },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./modules/pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
