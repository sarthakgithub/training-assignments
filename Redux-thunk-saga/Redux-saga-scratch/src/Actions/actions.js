import * as types from "../constants/ActionTypes.js"

export function incrementFunction(){
    return {
        type:types.INCREMENT_COUNTER
    }
}

export function decrementFunction(){
    return {
        type:types.DECREMENT_COUNTER
    }
}

export function incrementAsyncFunction(){
    return {
        type:types.INCREMENT_COUNTER_ASYNC
    }
}

export function sagaloading(){
    return {
        type:types.SAGA_LOADING
    }
}

export function sagasuccess(){
    return {
        type:types.SAGA_SUCCESS
    }
}

export function sagafailure(){
    return {
        type:types.SAGA_FAILURE
    }
}

export function loading(){
    return {
        type:types.LOADING
    }
}

export function loaded(){
    return {
        type:types.LOADED
    }
}