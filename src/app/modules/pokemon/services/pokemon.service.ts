import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonItemList } from '../model/pokemon-item-list';
import { PokemonItemDetail } from '../model/pokemon-item-detail';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonDetailsApiUrl = 'https://pokeapi.co/api/v2/pokemon';
  pokemonImagesApiUrl = 'https://pokeres.bastionbot.org/images/pokemon';
  constructor(private http: HttpClient) {}

  findPokemonById(id: string): Observable<PokemonItemDetail> {
    return this.http.get<any>(`${this.pokemonDetailsApiUrl}/${id}`).pipe(
      map((res) => {
        const moves: string[] = res.moves.map((m) => m.move.name);
        return {
          id,
          name: res.name,
          moves,
          image: `${this.pokemonImagesApiUrl}/${id}.png`,
        } as PokemonItemDetail;
      })
    );
  }

  findAllPokemons(): Observable<PokemonItemList[]> {
    return this.http.get(this.pokemonDetailsApiUrl + '?limit=151').pipe(
      map((res) =>
        res['results'].map((p) => {
          const parts = p.url.split('/');
          const id = parts[parts.length - 2];
          return {
            ...p,
            id,
            image: `${this.pokemonImagesApiUrl}/${id}.png`,
          } as PokemonItemList;
        })
      )
    );
  }
}
