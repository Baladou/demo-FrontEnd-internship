import { combineReducers } from 'redux'
import { users } from './userReducers'
import roleReducer from './roleReducer'

export default combineReducers({
  users: users,
  roles: roleReducer
})