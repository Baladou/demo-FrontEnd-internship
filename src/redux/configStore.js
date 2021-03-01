import {createStore, combineReducers , applyMiddleware,compose  } from 'redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*
const enhancer = composeEnhancers(
    applyMiddleware(thunk, logger)
    // other store enhancers if any
  );*/
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           
        })
    );

    return store;
}