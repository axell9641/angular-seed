import { Component, OnInit } from '@angular/core';
import { PokemonItemDetail } from '../../model/pokemon-item-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonItemDetail;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemon = this.route.snapshot.data['pokemon'];
  }
}
