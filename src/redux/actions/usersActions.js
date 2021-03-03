import * as ActionTypes from '../types';
import axios from 'axios';


export const getUsers = () => async dispatch => {

  try {
    const res = await axios.get(`http://localhost:8084/api/users`)
    dispatch({
      type: ActionTypes.GET_USERS,
      payload: res.data.result
    })
  }
  catch (e) {
    dispatch({
      type: ActionTypes.USERS_ERROR,
      payload: console.log(e),
    })
  }

}


export const postUser = (username, firstName, lastName, email, roleName, supervisorUserName) => (dispatch) => {

  const newUser = {
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
    role: { name: roleName },
    supervisor: { username: supervisorUserName }
  };

  return axios({
    method: "POST",
    url: "http://localhost:8084/api/users",
    data: newUser
  }).then(response => {
    if (response.status == 201) {
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  })

};

export const addUser = (user) => ({
  type: ActionTypes.ADD_USER,
  payload: user
});
