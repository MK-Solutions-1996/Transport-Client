import React from "react";
import TopNavbar from "../components/TopNavbar";
import {
  ButtonContainer,
  LabelContainer,
  InputContainer
} from "../components/Customs";

function signIn() {
  return (
    <div className="background">
      <TopNavbar nextPage="/signup" pageName="Sign Up" />
      <div className="center">
        <div className="card">
          <form action="/action_page.php">
            <div className="center">
              <LabelContainer>Sign In</LabelContainer>
            </div>
            <div className="form-group center">
              <InputContainer
                type="text"
                className="form-control"
                id="usr"
                name="username"
                placeholder="Email Address"
              ></InputContainer>
            </div>
            <div className="form-group center">
              <InputContainer
                type="password"
                className="form-control"
                id="pwd"
                name="password"
                placeholder="Password"
              ></InputContainer>
            </div>
            <div className="center">
              <ButtonContainer>Sign In</ButtonContainer>
            </div>
            <div className="text">
              Don't have an account? <a href="/signup">Sign Up here</a>
            </div>
            <div className="text">
              <a href="#">Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default signIn;
