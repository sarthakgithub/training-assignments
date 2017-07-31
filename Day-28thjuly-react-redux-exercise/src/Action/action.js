import * as types from '../actionTypes/actiontypes.js'

export function increamentFunction(){
    return{
        type: types.INCREAMENT_COUNTER
    }
}

export function decreamentFunction(){
    return{
        type: types.DECREAMENT_COUNTER
    }
}

export function resetFunction(){
    return{
        type: types.RESET_COUNTER
    }
}