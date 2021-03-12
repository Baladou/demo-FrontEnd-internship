import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { users } from './reducers/usersReducer';
import { fetchUsersSaga, AddUsersSaga } from './sagas/users';

import { roles } from './reducers/rolesReducer';
import { fetchRolesSaga } from './sagas/roles';

function* saga() {

    yield all([
        AddUsersSaga(),
        fetchRolesSaga(),
        fetchUsersSaga(),

    ]);
}

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    users,
    roles
});

export default createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
    ),
);

sagaMiddleware.run(saga);
