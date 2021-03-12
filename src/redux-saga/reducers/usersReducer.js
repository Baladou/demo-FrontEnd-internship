import { FETCH_USERS, RECEIVE_USERS_SUCCESS, RECEIVE_USERS_FAILURE } from '../types'

export default (
    state = { users: {}, error: null, loading: false },
    { type, users, error }
) => {
    switch (type) {
        case FETCH_USERS:
            return { ...state, error: null, loading: true };
        case RECEIVE_USERS_SUCCESS:
            return { ...state, users, error: null, loading: false };
        case RECEIVE_USERS_FAILURE:
            return { ...state, users: {}, error, loading: false };
        default:
            return state;
    }
}