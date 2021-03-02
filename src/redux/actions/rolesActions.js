import {GET_ROLES, ROLES_ERROR} from '../types'
import axios from 'axios'

export const getRoles = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://localhost:8084/api/roles`)
        dispatch( {
            type: GET_ROLES,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: ROLES_ERROR,
            payload: console.log(e),
        })
    }

}