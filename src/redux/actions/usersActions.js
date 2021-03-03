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
    console.log(response.status);
    if (response.status == 200) {
      dispatch(addUserSuccess(response))
      alert("user created successfully")
    }
    else {


    }
  })
    .catch((err) => {
      dispatch(addUserFailed(err.response.data))
      alert(err.response.data.message)
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