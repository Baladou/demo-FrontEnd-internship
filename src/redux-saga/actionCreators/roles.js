import { FETCH_ROLES, RECEIVE_ROLES_SUCCESS, RECEIVE_ROLES_FAILURE } from '../types'

export const fetchRoles = () => ({
    type: FETCH_ROLES,
});

export const receiveRolesSuccess = (roles) => ({
    type: RECEIVE_ROLES_SUCCESS,
    payload: roles
});

export const receiveRolesFailure = (error) => ({
    type: RECEIVE_ROLES_FAILURE,
    payload: error,
});