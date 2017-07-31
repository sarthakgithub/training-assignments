import * as actionTypes from '../actionTypes/actiontypes.js'


const initialState = {
    counter : 0
}
export default function stateReducer(state = initialState,action){
    switch(action.type){
        case actionTypes.INCREAMENT_COUNTER:
            console.log(state);
            return Object.assign({},...state,{counter : state.counter + 1});

        case actionTypes.DECREAMENT_COUNTER:
            console.log(state);
            return Object.assign({},...state,{counter : state.counter - 1});

        case actionTypes.RESET_COUNTER:
            console.log(state);
            return Object.assign({},...state,{counter : 0});
        default:
            return state;
    }
}