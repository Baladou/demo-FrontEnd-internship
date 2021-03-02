import {GET_USERS, USERS_ERROR,ADD_USER,ADD_ROLE} from '../types'
import axios from 'axios';


export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://localhost:8084/api/users`)
        dispatch( {
            type: GET_USERS,
            payload: res.data.result
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}



