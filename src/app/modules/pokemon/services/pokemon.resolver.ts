import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonResolver implements Resolve<any> {
  constructor(private pokemonService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.pokemonService.findPokemonById(route.params['id']);
  }
}
