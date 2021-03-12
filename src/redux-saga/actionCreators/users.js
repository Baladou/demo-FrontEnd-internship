import { FETCH_USERS, RECEIVE_USERS_SUCCESS, RECEIVE_USERS_FAILURE, ADD_USER } from '../types'

export const fetchUsers = () => ({
    type: FETCH_USERS,
});

export const receiveUsersSuccess = (users) => ({
    type: RECEIVE_USERS_SUCCESS,
    payload: users
});

export const receiveUsersFailure = (error) => ({
    type: RECEIVE_USERS_FAILURE,
    payload: error,
});

export const CreateUser = (user) => ({
    type: ADD_USER,
    payload: user,
});