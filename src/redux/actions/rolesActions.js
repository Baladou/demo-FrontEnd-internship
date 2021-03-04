import * as ActionTypes from '../types';
import axios from 'axios'

export const getRoles = () => async dispatch => {

  try {
    const res = await axios.get(`http://localhost:8084/api/roles`)
    dispatch({
      type: ActionTypes.GET_ROLES,
      payload: res.data
    })
  }
  catch (e) {
    dispatch({
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
    url: "http://localhost:8084/api/roles",
    data: newRole
  }).then(response => {
    console.log(response.data);

    if (response.data.status == 201) {
      dispatch(addRole(response.data.result))
      alert("Role created successfully")
    }
    else if (response.data.status == 400) { alert("Error: " + response.data.result.message) }
  })
};

export const addRole = (role) => ({
  type: ActionTypes.ADD_ROLE,
  payload: role
});

export const deleteRole = (id) => (dispatch) => {


  return axios({
    method: "DELETE",
    url: `http://localhost:8084/api/roles/${id}`
  }).then(response => {
    if (response.status == 200) {
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  })

};