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
    else { }
  })
    .catch(err => {
      console.log(err);
      alert("Error " + err.response)
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
export const deleteUser = (id) => (dispatch) => {


  return axios({
    method: "DELETE",
    url: `http://localhost:8084/api/users/${id}`
  }).then(response => {
    console.log(response.data);

    if (response.data.status == 200) {

      alert("User deleted  successfully")
    }
    else if (response.data.status == 400) { alert("Error: " + response.data.result.message) }

  })
    .catch(err => {
      //console.log(err.status);
      alert("Error: You can not delete this User because he is the supervisor of onother user.")
    })
};


export const updateUser = (id, username, firstName, lastName, email, roleName, supervisorUserName) => (dispatch) => {

  const newUser = {
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
    role: { name: roleName },
    supervisor: (supervisorUserName ? { username: supervisorUserName } : null)
  };

  return axios({
    method: "PUT",
    url: `http://localhost:8084/api/users/${id}`,
    data: newUser
  }).then(response => {


    if (response.data.status == 204) {
      //console.log(response.data.status)
      alert("user Updated successfully")
    }
    else if (response.data.status == 400) { //console.log(response.data.status); 
      alert("Error:  " + response.data.result.message)
    }
    else { alert("Error:  " + response.data.status + " " + response.data.result.message) }
  })
    .catch(err => {
      //console.log(err);
      alert("Error: " + err.response)
    })


};

