import * as ActionTypes from '../types';


const initialState = {
    users: [],
    loading: true
}

export default function (state = initialState, action) {

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
        default: return state
    }

}