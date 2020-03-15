import { combineReducers } from 'redux';
import { signup_reducer } from './USER/signup_user';

const root_reducer = combineReducers({
    signup: signup_reducer
});

export default root_reducer;