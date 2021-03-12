import * as ActionTypes from '../types';
export const users = (state = {
    isLoading: true,
    errMessAddUser: null,
    errMessLoad: null,
    users: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERS:
            return {
                ...state, errMessAddUser: null,
                users: action.payload,
                loading: false
            }
        case ActionTypes.FETCH_USERS:
            return {
                ...state, errMessAddUser: null,
                users: action.payload,
                loading: false
            }
        case ActionTypes.USERS_ERROR:
            return { ...state, errMessLoad: action.payload };
        case ActionTypes.ADD_USER:
            var user = action.payload;
            return { ...state, users: state.users.concat(user) };
        case ActionTypes.ADD_USER_ERROR:
            return { ...state, errMessAddUser: action.payload };
        default: return state
    }

}