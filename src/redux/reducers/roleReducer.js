import * as ActionTypes from '../types';

const initialState = {
    roles: [],
    loading: true
}

export default function (state = initialState, action) {

    switch (action.type) {

        case ActionTypes.GET_ROLES:
            return {
                ...state,
                roles: action.payload,
                loading: false

            }
        case ActionTypes.ADD_ROLE:
            var role = action.payload;

            return { ...state, roles: state.roles.concat(role) };
        default: return state
    }

}