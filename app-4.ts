import { createStore, Store } from "redux";

import { conterReducer } from './counter/counter.reducer';
import { incrementAction } from './counter/counter.actions';

const store: Store = createStore( conterReducer );

store.subscribe( ()=>console.log( 'Store' + store.getState() ) );

store.dispatch( incrementAction );
store.dispatch( incrementAction );
store.dispatch( incrementAction );
store.dispatch( incrementAction );
store.dispatch( incrementAction );
store.dispatch( incrementAction );
