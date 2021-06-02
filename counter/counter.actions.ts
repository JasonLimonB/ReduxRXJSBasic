import { Action } from '../ngrx-fake/ngrx';

export const incrementAction: Action = {
    type: 'INCREMENT'
};
export const decrementAction: Action = {
    type: 'DECREMENT'
};
export const timesAction: Action = {
    type: 'TIMES',
    payload: 5
}
export  const dividebyAction: Action = {
    type: 'DIVIDEDBY',
    payload: 2
}

export const resetAction: Action = {
    type: 'RESET'
}