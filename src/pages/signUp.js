import React from "react";
import TopNavbar from "../components/TopNavbar";
import { ButtonContainer, LabelContainer } from "../components/Customs";

function signUp() {
  return (
    <div className="background">
      <TopNavbar nextPage="/" pageName="Sign In" />

      <div class="center">
        <div class="card">
          <form action="/action_page.php">
            <div className="center">
              <LabelContainer>Sign Up</LabelContainer>
            </div>
            <div class="form-group input">
              <input
                type="text"
                class="form-control"
                id="empno"
                name="empnumber"
                placeholder="Employee Number"
              />
            </div>
            <div class="form-group input">
              <input
                type="text"
                class="form-control"
                id="email"
                name="emailaddress"
                placeholder="Email Address"
              />
            </div>
            <div class="form-group input">
              <input
                type="password"
                class="form-control"
                id="pwd"
                name="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group input">
              <input
                type="password"
                class="form-control"
                id="cpwd"
                name="confirmpassword"
                placeholder="Confirm Password"
              />
            </div>
            <div className="center">
              <ButtonContainer>Sign Up</ButtonContainer>
            </div>
            <div className="text">
              Already have an account? <a href="/">Sign In here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default signUp;
