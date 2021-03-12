import { takeLatest, put, call } from 'redux-saga/effects';
import { receiveUsersSuccess, receiveUsersFailure } from '../actionCreators/users';
import axios from 'axios'
import { FETCH_USERS } from '../../redux/types';

function* onFetchUsers() {
    try {
        // API Request
        const response = yield call(axios.get, ['http://localhost:8084/api/users']);
        //console.log(response.data.result)
        yield put(receiveUsersSuccess(response.data.result));
    } catch (e) {
        yield put(receiveUsersFailure(e));
    }
}

export function* fetchUsersSaga() {
    yield takeLatest(FETCH_USERS, onFetchUsers);
}