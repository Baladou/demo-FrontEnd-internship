import {GET_ROLES} from '../types'

const initialState = {
    roles:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_ROLES:
        return {
            ...state,
            roles:action.payload,
            loading:false

        }
        default: return state
    }

}