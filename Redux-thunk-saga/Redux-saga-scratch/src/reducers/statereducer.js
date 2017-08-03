import * as actionTypes from "../constants/ActionTypes.js";

const initialState = {
    counter: 0
}

export default function stateReducer(state = initialState, action) {

    switch (action.type) {        
        case actionTypes.INCREMENT_COUNTER:
            console.log(state);
            console.log('called from generator');
            return Object.assign({}, ...state, { counter: state.counter + 1 });
        case actionTypes.DECREMENT_COUNTER:
            console.log('fail case')
            return Object.assign({}, ...state, { counter: state.counter - 1 });
        case actionTypes.LOADING:
            console.log('loading');
        case actionTypes.LOADED:
                console.log('loaded');
        default:
            return Object.assign({}, state);
    }

}