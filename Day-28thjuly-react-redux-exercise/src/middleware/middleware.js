const logger = store => next => action => {
    console.log('dispatching',action);
    let result = next(action);
    console.log('result' , result);
    console.log('next state',store.getState());
    return result;
}

const crashReporter = store =>next =>action => {
    try{
        return next(action);
    }catch(err){
        console.error('caught an exception',err);
        throw err;
    }
}

export {logger,crashReporter};