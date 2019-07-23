import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducers';
import streamsReducer from './streamReducers';

export default combineReducers({
   auth: authReducer,
   form: formReducer,
   streams : streamsReducer
})