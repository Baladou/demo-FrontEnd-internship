import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../types';
import { fetchUsersSaga } from '../apis/users';
export function* watchAll() {
    yield takeEvery(actionTypes.FETCH_USERS_REQUEST, fetchUsersSaga);
}