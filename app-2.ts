import { Action } from './ngrx-fake/ngrx';
import { incrementAction, decrementAction, dividebyAction, timesAction, resetAction } from './counter/counter.actions'

function reducer( state = 10, action: Action ){
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

console.log(reducer( 10,  incrementAction));    // 11
console.log(reducer( 10,  decrementAction));    // 9
console.log(reducer( 10,  timesAction));        // 50
console.log(reducer( 10,  dividebyAction));     // 5
console.log(reducer( 10,  resetAction));        // 0


