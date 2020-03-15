import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import {
  ButtonContainer,
  TopicContainer,
  InputContainer,
  LongLabelContainer
} from "../components/Customs";
import { Dropdown } from "primereact/dropdown";

function SignUp() {
  const [types] = useState([
    {
      label: "Line Manager",
      value: "Line Manager"
    },
    {
      label: "Department Manager",
      value: "Department Manager"
    },
    {
      label: "HR Manager",
      value: "HR Manager"
    }
  ]);

  const [selectedType, setType] = useState("");

  //console.log('type:', type);
  console.log("selectedType:", selectedType);

  return (
    <div className="background">
      <TopNavbar nextPage="/" pageName="Sign In" />

      <div class="center">
        <div class="card">
          <form action="/action_page.php">
            <div className="center">
              <TopicContainer>Sign Up</TopicContainer>
            </div>
            <div className="direction">
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="empno"
                  name="empnumber"
                  placeholder="Employee Number"
                ></InputContainer>
              </div>
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="fname"
                  name="firstname"
                  placeholder="First Name"
                ></InputContainer>
              </div>
            </div>
            <div className="direction">
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="email"
                  name="emailaddress"
                  placeholder="Email Address"
                ></InputContainer>
              </div>
              <div className="form-group center">
                <Dropdown
                  value={selectedType}
                  options={types}
                  ariaLabel="Test"
                  onChange={e => setType(e.value)}
                  placeholder="Choose Employee Type"
                  optionLabel="label"
                  style={{
                    width: "20vw",
                    height: "2rem",
                    borderRadius: "0.4rem",
                    margin: "0.3rem"
                  }}
                />
              </div>
            </div>
            <div className="direction">
              <div className="form-group center">
                <InputContainer
                  type="password"
                  className="form-control"
                  id="pwd"
                  name="password"
                  placeholder="Password"
                ></InputContainer>
              </div>
              <div className="form-group center">
                <InputContainer
                  type="password"
                  className="form-control"
                  id="cpwd"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                ></InputContainer>
              </div>
            </div>
            <div className="center">
              <ButtonContainer>Sign Up</ButtonContainer>
            </div>
            <div className="center">
              <LongLabelContainer>
                Already have an account? <a href="/">Sign In here</a>
              </LongLabelContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
