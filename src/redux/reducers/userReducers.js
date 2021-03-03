import * as ActionTypes from '../types';


const initialState = {
    users: [],
    loading: true
}

export const users = (state = {
    isLoading: true,
    errMessAddUser: null,
    users: []
}, action) => {

    switch (action.type) {

        case ActionTypes.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false

            }
        case ActionTypes.ADD_USER:
            var user = action.payload;
            return { ...state, user: state.users.concat(user) };
        case ActionTypes.ADD_USER_ERROR:
            return { ...state, errMessAddUser: action.payload };
        default: return state
    }

}