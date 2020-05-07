import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonItemList } from '../model/pokemon-item-list';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonDetailsApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  pokemonImagesApiUrl = 'https://pokeres.bastionbot.org/images/pokemon';
  constructor(private http: HttpClient) {}

  findPokemonById(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  findAllPokemons(): Observable<PokemonItemList[]> {
    return this.http.get(this.pokemonDetailsApiUrl).pipe(
      map((res) =>
        res['results'].map((p) => {
          const parts = p.url.split('/');
          const id = parts[parts.length - 2];
          return {
            ...p,
            image: `${this.pokemonImagesApiUrl}/${id}.png`,
          } as PokemonItemList;
        })
      )
    );
  }
}
