import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string = "https://pokeapi.co/api/v2/pokemon/";

  //Instancia de la clase que permite peticiones http
  constructor(private http: HttpClient) { }

  //Obtener el pokemon
  getPokemon(id: number){
    return this.http.get(this.url + id);
  }
}
