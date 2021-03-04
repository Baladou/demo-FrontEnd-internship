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
    console.log(response.data);

    if (response.data.status == 201) {
      dispatch(addUserSuccess(response.data.result))
      alert("user created successfully")
    }
    else if (response.data.status == 400) { alert("Error " + response.data.result.message) }
  })





};

export const addUserSuccess = (user) => ({
  type: ActionTypes.ADD_USER,
  payload: user
});

function addUserFailed(err) {
  return {
    type: ActionTypes.ADD_USER_ERROR,
    payload: err
  }
}


