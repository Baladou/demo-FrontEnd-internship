import * as ActionTypes  from '../types';
import axios from 'axios'

export const getRoles = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://localhost:8084/api/roles`)
        dispatch( {
            type: ActionTypes.GET_ROLES,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: ActionTypes.ROLES_ERROR,
            payload: console.log(e),
        })
    }

}
    export const postRole = (name) => (dispatch) => {

        const newRole = {
            name: name
        };
       
        return axios({
            method: "POST", 
            url:"http://localhost:8084/api/roles", 
            data:  newRole
          }).then(response => {
          if (response.status==201) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        })
     
      };
    
      export const addRole = (role) => ({
        type: ActionTypes.ADD_ROLE,
        payload: role
    });

