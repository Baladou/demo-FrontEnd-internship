import { FETCH_ROLES, RECEIVE_ROLES_SUCCESS, RECEIVE_ROLES_FAILURE } from '../types'

export const roles = (state = { roles: [], error: null, loading: false }, action) => {
    switch (action.type) {
        case FETCH_ROLES:
            return { ...state, error: null, loading: true };
        case RECEIVE_ROLES_SUCCESS:
            return { ...state, roles: action.payload, error: null, loading: false };
        case RECEIVE_ROLES_FAILURE:
            return { ...state, roles: [], error: action.payload, loading: false };
        default:
            return state;
    }
}