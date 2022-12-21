import { Component, Input } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';
import { PokemonService } from './services/pokemon.service';

//El store manejara este objeto
interface AppState{
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input () contador!: number;
  
  urlImage!: string;
  name!: string;

  //Inyección de servicio
  constructor(private store: Store<AppState>, private pokemonService: PokemonService) {
  
  //Cambios que sufra el State
  this.store.subscribe(state => {
    //Asignamos al contador, los cambios del state
    this.contador = state.contador;
    this.urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9t9lVw9svdyJiBI4OSvI-KVWHsOjPtTNypl_ew15QFnE3PTOmF8gI_a7OOt00TDWnLsM&usqp=CAU";
    this.name = "pokemon";
    });
  }

  incrementar() {
  this.contador ++;
  const accion = new IncrementarAction();
  this.searchPokemon();
  this.store.dispatch( accion );
  }

  decrementar() {
  this.contador --;
  const accion = new DecrementarAction();
  this.searchPokemon();
  this.store.dispatch( accion );

  }

  //Ejecutar el get del service
  searchPokemon(){
    this.pokemonService.getPokemon(this.contador).subscribe((data:any)=> {
      this.urlImage = data.sprites.front_default;
      this.name = data.name;
    });
  }
}
