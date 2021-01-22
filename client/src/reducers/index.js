import authReducer from './authReducer'
import { combineReducers } from 'redux'

// auth is the key, in which the state will be maniputed in the application
export default combineReducers({
    auth: authReducer
});