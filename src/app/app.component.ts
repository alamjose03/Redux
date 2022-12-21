import { Component, Input } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';

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

  @Input () contador: number;

  //Inyección de servicio
  constructor(private store: Store<AppState>) {
  this.contador = 0;
  //Cambios que sufra el State
  this.store.subscribe(state => {
    //Asignamos al contador, los cambios del state
    this.contador = state.contador;
    });
  }

  incrementar() {
  //this.contador ++;
  const accion = new IncrementarAction();
    this.store.dispatch( accion );
  }

  decrementar() {
  //this.contador --;
  const accion = new DecrementarAction();
    this.store.dispatch( accion );
  }
}
