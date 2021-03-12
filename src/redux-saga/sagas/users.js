import { takeLatest, put, call } from 'redux-saga/effects';
import { receiveUsersSuccess, receiveUsersFailure } from '../actionCreators/users';
import axios from 'axios'
import { FETCH_USERS, ADD_USER } from '../../redux-saga/types';

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

function* onAddUser(username, firstName, lastName, email, roleName, supervisorUserName) {
    const newUser = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: { name: roleName },
        supervisor: { username: supervisorUserName }
    };
    try {
        // API Request
        const response = yield call(axios.post, ['http://localhost:8084/api/users'], newUser);
        console.log("done post")

        if (response.data.status == 201) {
            //yield put(receiveUsersSuccess(response.data.result));
            console.log("done")
            alert("user created successfully")
        }
        else if (response.data.status == 400) { alert("Error " + response.data.result.message) }

    } catch (e) {

    }
}

export function* fetchUsersSaga() {
    yield takeLatest(FETCH_USERS, onFetchUsers);
}

export function* AddUsersSaga() {
    yield takeLatest(ADD_USER, onAddUser);
}