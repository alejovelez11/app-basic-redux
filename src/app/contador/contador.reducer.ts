import { Action } from "@ngrx/store";
import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, actions, DIVIDIR, RESET } from './contador.actions';
export function contadorReducer(state:number = 10, action:actions){
    switch (action.type) {
        case INCREMENTAR:
            return state + 1
            break;

        case DECREMENTAR:
            return state - 1
            break;
    
        case MULTIPLICAR:
            return state * action.payload
            break;
        case DIVIDIR:
            
            return state / action.payload
            break;
            
        case RESET:
            return state = 0
            break;
    
        default:
            return state
            break;
    }

}