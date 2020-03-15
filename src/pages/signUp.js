import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import {
  ButtonContainer,
  TopicContainer,
  InputContainer,
  SelectContainer,
  LongLabelContainer
} from "../components/Customs";
import { useSelector, useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';
import { signup_user_action } from '../redux';

function SignUp() {

  // const signup_state = useSelector(state => state.signup);
  // const { loading, result, error } = signup_state;
  // const dispatch = useDispatch();

  const [empNo, setEmpNo] = useState('');
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [empType, setEmpType] = useState('');
  const [pw, setPw] = useState('');
  const [cpw, setCpw] = useState('');



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
                  onChange={(e) => setEmpNo(e.target.value)}
                ></InputContainer>
              </div>
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="fname"
                  name="firstname"
                  placeholder="First Name"
                  onChange={(e) => setFname(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                ></InputContainer>
              </div>
              <div className="form-group center">
                <SelectContainer className="browser-default custom-select dropdown">
                  <option selected>Employee Type</option>
                  <option value="1">Transport Manager</option>
                  <option value="2">Line Manager</option>
                  <option value="3">HR Manager</option>
                </SelectContainer>
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
