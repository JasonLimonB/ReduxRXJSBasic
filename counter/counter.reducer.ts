import { Action } from '../ngrx-fake/ngrx'

export function conterReducer( state = 10, action: Action ){
    switch( action.type ){
        case 'INCREMENT':
            return state+=1;
        case 'DECREMENT':
            return state-+1;
        case 'TIMES':
            return state*action.payload;
        case 'DIVIDEDBY':
            return state/action.payload;
        case 'RESET':
            return state = 0;
    }

    return state;
}
