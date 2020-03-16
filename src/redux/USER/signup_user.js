import axios from "axios";

const initial_state = {
  loading: false,
  result: "",
  error: ""
};

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

const request = () => {
  return {
    type: REQUEST
  };
};

const success = result => {
  return {
    type: SUCCESS,
    payload: result
  };
};

const failure = error => {
  return {
    type: FAILURE,
    payload: error
  };
};

export const signup_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case SUCCESS: {
      return {
        ...state,
        result: action.payload,
        loading: false
      };
    }
    case FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
};

export const signup_user_action = data => {
  return dispatch => {
    dispatch(request());
    axios({
      method: "post",
      url: "http://localhost:4000/user/signup",
      data: {
        empNo: data.empNo,
        firstName: data.fname,
        type: data.empType,
        email: data.email,
        password: data.pw
      },
      headers: { api_key: "123" },
      timeout: 4000 // 4 seconds
    })
      .then(response => {
        var result = response.data;
        console.log("message", result.message);
        dispatch(success(result));
      })
      .catch(error => {
        var result = error.response.data;
        console.log("error", result.error);
        dispatch(failure(result.error));
      });
  };
};
