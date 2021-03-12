import { FETCH_USERS, RECEIVE_USERS_SUCCESS, RECEIVE_USERS_FAILURE, ADD_USER } from '../types'

export const users = (state = { users: [], error: null, loading: false }, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, error: null, loading: true };
        case RECEIVE_USERS_SUCCESS:
            return { ...state, users: action.payload, error: null, loading: false };
        case RECEIVE_USERS_FAILURE:
            return { ...state, users: [], error: action.payload, loading: false };
        case ADD_USER:
            var user = action.payload;
            return { ...state, users: state.users.concat(user) };
        default:
            return state;
    }
}