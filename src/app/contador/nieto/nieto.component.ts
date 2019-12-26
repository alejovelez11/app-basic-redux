import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { actions, ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  contador:number
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select("contador").subscribe(cont=>{
      this.contador = cont 
    })
  }

  reset(){
    const accion = new ResetAction()
    this.store.dispatch(accion)
  }

}
