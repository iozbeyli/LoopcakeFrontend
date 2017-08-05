import {combineReducers} from 'redux';
import userReducer from './userReducer';
import courseReducer from './course';
export default combineReducers({
   user: userReducer,
   course: courseReducer
});