import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import {
  ButtonContainer,
  TopicContainer,
  InputContainer,
  LongLabelContainer
} from "../components/Customs";
import { useSelector, useDispatch } from "react-redux";
import { signin_user_action } from "../redux";

function SignIn() {
  const signin_state = useSelector(state => state.signin);
  const { loading, result, error } = signin_state;
  const dispatch = useDispatch();

  console.log("signup_states:", signin_state);

  const [empNo, setEmpNo] = useState("");
  const [pw, setPw] = useState("");

  const payload = { empNo, pw };
  return (
    <div className="background">
      <TopNavbar nextPage="/signup" pageName="Sign Up" />
      <div className="center">
        <div className="card">
          <div className="center">
            <TopicContainer>Sign In</TopicContainer>
          </div>
          <div className="form-group center">
            <InputContainer
              type="text"
              className="form-control"
              id="usr"
              name="username"
              placeholder="Employee No."
              onChange={e => setEmpNo(e.target.value)}
            ></InputContainer>
          </div>
          <div className="form-group center">
            <InputContainer
              type="password"
              className="form-control"
              id="pwd"
              name="password"
              placeholder="Password"
              onChange={e => setPw(e.target.value)}
            ></InputContainer>
          </div>
          <div className="center">
            {/* <ButtonContainer>
                <Link to="main" className="ml-auto center">
                  Sign In
                </Link>
              </ButtonContainer> */}
            <button
              type="submit"
              onClick={() => dispatch(signin_user_action(payload))}
            >
              Signin
            </button>
          </div>
          <div className="center">
            <LongLabelContainer>
              Don't have an account? <a href="/signup">Sign Up here</a>
            </LongLabelContainer>
          </div>
          <div className="center">
            <LongLabelContainer>
              <a href="/">Forgot your password?</a>
            </LongLabelContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
