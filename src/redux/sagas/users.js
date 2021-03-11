import { put, call } from 'redux-saga/effects';
import { fetchUsers } from '../actions/usersActions';
import API from '../apis/posts';
export function* fetchUsersSaga() {
    try {
        const response = yield call(API.getUsers);
        yield put(fetchUsers(response.data));
    } catch (error) {
        console.log(error);
    }
}