import { combineReducers } from "redux";
import { signup_reducer } from "./USER/signup_user";
import { signin_reducer } from "./USER/signin_user";

const root_reducer = combineReducers({
  signup: signup_reducer,
  signin: signin_reducer
});

export default root_reducer;
