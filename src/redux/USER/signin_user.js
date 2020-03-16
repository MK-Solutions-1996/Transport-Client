import axios from "axios";

const initial_state = {
  loading: false,
  user: {},
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

const success = user => {
  return {
    type: SUCCESS,
    payload: user
  };
};

const failure = error => {
  return {
    type: FAILURE,
    payload: error
  };
};

export const signin_reducer = (state = initial_state, action) => {
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
        user: action.payload,
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

export const signin_user_action = data => {
  return dispatch => {
    dispatch(request());
    axios({
      method: "POST",
      url: "http://localhost:4000/user/login",
      data: {
        username: data.empNo,
        password: data.pw
      },
      headers: { api_key: "123" },
      timeout: 4000 // 4 seconds
    })
      .then(response => {
        var result = response.data;
        console.log("message", result.message);
        console.log("User Data", result.userData);
        dispatch(success(result.userData));
      })
      .catch(error => {
        var result = error.response;
        if (result.data.error) {
          console.log("error", result.data.error);
          dispatch(failure(result.data.error));
        } else {
          console.log("Server error");
        }
      });
  };
};
