import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import userReducer from './reducers/usersReducer';
import { fetchUsersSaga } from './sagas';

function* saga() {
    yield all([
        fetchUsersSaga(),
    ]);
}

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    userReducer,
});

export default createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
    ),
);

sagaMiddleware.run(saga);
