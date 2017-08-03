import React from "react";
import {delay} from "redux-saga";
import {call,put,take,takeEvery,all,race} from "redux-saga/effects";
import * as actionTypes from "../constants/ActionTypes"

export function* helloWorldSaga(){
    console.log("Hello world ");
}

function myApiCall1(){
    //return 1;

    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            resolve(1);
        },1000)
    })

}
function myApiCall2(){
    //return 2;
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            resolve(2);
        },1000)
    })

}
export function* incrementAsync(){

    yield put({type:actionTypes.LOADING})

    var x =  yield call(myApiCall1)

    var {myApiCall3,myApiCall4} = yield all({myApiCall3 : call(myApiCall1),myApiCall4 : call(myApiCall2)});
    console.log(myApiCall3);
    //var promiseRace = yield race([call(myApiCall1),call(myApiCall2)]);

    if (x){
        yield put({type:actionTypes.INCREMENT_COUNTER})
    }
    else {
        yield put({type:actionTypes.DECREMENT_COUNTER})
    }
    yield put({type:actionTypes.LOADED})
}

export function* watchIncrementAsync(){
    while(true){
        yield take(actionTypes.INCREMENT_COUNTER_ASYNC)
        yield call( incrementAsync);
    }
}

export default function* rootSaga() {
  yield all([  helloWorldSaga(),watchIncrementAsync()  ])
}

