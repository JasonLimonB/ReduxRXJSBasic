// Actions
export interface Action {
    type: string,
    payload?: any
}

export interface Reducer<T>{
    ( states: T, action: Action ): T
}