import { FETCH_USERS, RECEIVE_USERS_SUCCESS, RECEIVE_USERS_FAILURE } from '../types'

export const fetchUsers = () => ({
    type: FETCH_USERS,
});

export const receiveUsersSuccess = (users) => ({
    type: RECEIVE_USERS_SUCCESS,
    users,
});

export const receiveUsersFailure = (error) => ({
    type: RECEIVE_USERS_FAILURE,
    error,
});