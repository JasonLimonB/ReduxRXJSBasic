// Actions
interface Action {
    type: string,
    payload?: any
}

function reducer( state = 10, action: Action ){
   /* if( action.type === 'INCREMENT' ){
        return state += 1;
    }
    */

    switch( action.type ){
        case 'INCREMENT':
            return state+=1;
        case 'DECREMENT':
            return state-+1;
        case 'TIMES':
            return state*action.payload;
        case 'DIVIDEDBY':
            return state/action.payload;
    }

    return state;
}
// using reducer

const incrementAction: Action = {
    type: 'INCREMENT'
};

console.log(reducer( 10, incrementAction ));

const decrementAction: Action = {
    type: 'DECREMENT'
};
console.log(reducer(10, decrementAction));

const timesAction: Action = {
    type: 'TIMES',
    payload: 5
}
console.log(reducer( 10, timesAction ));

const dividebyAction: Action = {
    type: 'DIVIDEDBY',
    payload: 2
}
console.log( reducer( 10, dividebyAction ) );
