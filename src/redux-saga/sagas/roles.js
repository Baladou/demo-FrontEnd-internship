import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import { receiveRolesSuccess, receiveRolesFailure } from '../actionCreators/roles';
import axios from 'axios'
import { FETCH_ROLES } from '../../redux-saga/types';

function* onFetchRoles() {
    try {
        // API Request
        const response = yield call(axios.get, ['http://localhost:8084/api/roles']);
        console.log("test ffff " + response.data)
        yield put(receiveRolesSuccess(response.data));
    } catch (e) {
        yield put(receiveRolesFailure(e));
    }
}

export function* fetchRolesSaga() {
    yield takeEvery(FETCH_ROLES, onFetchRoles);
}