import { combineReducers } from 'redux'
import userReducer from './userReducers'
import roleReducer from './roleReducer'

export default combineReducers({
  users: userReducer,
  roles: roleReducer
})