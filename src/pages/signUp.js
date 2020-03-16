import React, { useState, useEffect } from "react";
import TopNavbar from "../components/TopNavbar";
import {
  ButtonContainer,
  TopicContainer,
  InputContainer,
  LongLabelContainer
} from "../components/Customs";
import { Dropdown } from "primereact/dropdown";
import { useSelector, useDispatch } from 'react-redux';
import { signup_user_action } from '../redux';

function SignUp() {

  const signup_state = useSelector(state => state.signup);
  const { loading, result, error } = signup_state;
  const dispatch = useDispatch();

  console.log('signup_states:', signup_state);

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


  const [empNo, setEmpNo] = useState('');
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [empType, setEmpType] = useState('');
  const [pw, setPw] = useState('');
  const [cpw, setCpw] = useState('');

  const payload = { empNo, fname, email, empType, pw, cpw };




  return (
    <div className="background">
      <TopNavbar nextPage="/" pageName="Sign In" />

      <div class="center">
        <div class="card">
          <form >
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
                <Dropdown
                  value={empType}
                  options={types}
                  ariaLabel="Test"
                  onChange={e => setEmpType(e.value)}
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
                  onChange={(e) => setPw(e.target.value)}
                ></InputContainer>
              </div>
              <div className="form-group center">
                <InputContainer
                  type="password"
                  className="form-control"
                  id="cpwd"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  onChange={(e) => setCpw(e.target.value)}
                ></InputContainer>
              </div>
            </div>
            <div className="center">
              {/* <ButtonContainer type="Submit">Sign Up</ButtonContainer> */}

            </div>
            <div className="center">
              <LongLabelContainer>
                Already have an account? <a href="/">Sign In here</a>
              </LongLabelContainer>
            </div>
          </form>
          <button type="submit" onClick={() => dispatch(signup_user_action(payload))}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
