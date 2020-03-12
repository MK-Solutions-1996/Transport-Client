import React from "react";
import TopNavbar from "../components/TopNavbar";
import { ButtonContainer } from "../components/Customs";

function signIn() {
  return (
    <div className="background">
      <TopNavbar nextPage="/signup" pageName="Sign Up" />

      {/* Signin form should be implemented in here */}
      <div className="center">
        <div className="card">
          <form action="/action_page.php">
            <div className="topic">
              <label>Sign In</label>
            </div>
            <div className="form-group input">
              <input
                type="text"
                class="form-control"
                id="usr"
                name="username"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="form-group input">
              <input
                type="password"
                class="form-control"
                id="pwd"
                name="password"
                placeholder="Enter Password"
              />
            </div>
            {/* <div className="btnS">
            <button
              type="submit"
              class="btn btn-primary button-background"
              onClick={() => history.push("/addDriver")}
            >
              SIGN IN
                </button>
          </div> */}
            <div className="center">
              <ButtonContainer>Sign In</ButtonContainer>
            </div>
            <div className="label">
              Don't have an account? <a href="#">Sign Up</a>
            </div>
            <div className="label">
              <a href="#">Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default signIn;
