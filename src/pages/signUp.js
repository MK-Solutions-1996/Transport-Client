import React from "react";
import TopNavbar from "../components/TopNavbar";
import {
  ButtonContainer,
  LabelContainer,
  InputContainer
} from "../components/Customs";

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
            <div className="direction">
              <div class="form-group center">
                <InputContainer
                  type="text"
                  class="form-control"
                  id="empno"
                  name="empnumber"
                  placeholder="Employee Number"
                ></InputContainer>
              </div>
              <div class="form-group center">
                <InputContainer
                  type="text"
                  class="form-control"
                  id="fname"
                  name="firstname"
                  placeholder="First Name"
                ></InputContainer>
              </div>
            </div>
            <div className="direction">
              <div class="form-group center">
                <InputContainer
                  type="text"
                  class="form-control"
                  id="email"
                  name="emailaddress"
                  placeholder="Email Address"
                ></InputContainer>
              </div>
              <div class="form-group center">
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-light dropdown-toggle dropdown"
                    data-toggle="dropdown"
                  >
                    Employee Type
                  </button>
                  <div class="dropdown-menu">
                    <p class="dropdown-item">Transport Manager</p>
                    <p class="dropdown-item">Line Manager</p>
                    <p class="dropdown-item">HR Manager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="direction">
              <div class="form-group center">
                <InputContainer
                  type="password"
                  class="form-control"
                  id="pwd"
                  name="password"
                  placeholder="Password"
                ></InputContainer>
              </div>
              <div class="form-group center">
                <InputContainer
                  type="password"
                  class="form-control"
                  id="cpwd"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                ></InputContainer>
              </div>
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
