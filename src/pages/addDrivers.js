import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import SideMenuBar from "../components/SideMenuBar";
import { Link } from "react-router-dom";
import {
  ButtonContainer,
  InputContainer,
  LabelContainer,
  SelectContainer
} from "../components/Customs";
import { Spinner } from "primereact/spinner";

function addDrivers() {
  //   const initialCapacity = 0;
  //   const [capacity, setCapacity] = useState(initialCapacity);
  return (
    <div className="background">
      <TopNavbar nextPage="/" pageName="Sign Out" />
      <div
        className="col-md-2 side-menu"
        style={{ position: "relative", padding: 0 }}
      >
        <div style={{ position: "fixed", padding: 0, marginTop: 0 }}>
          <SideMenuBar />
        </div>
      </div>
      <div className="center">
        <div className="card">
          <form action="/action_page.php">
            <div className="center">
              <LabelContainer>Add Drivers</LabelContainer>
            </div>
            <div className="direction">
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="dname"
                  name="drivername"
                  placeholder="Driver Name"
                ></InputContainer>
              </div>
              <div className="form-group center">
                <InputContainer
                  type="number"
                  className="form-control"
                  id="dmobnum"
                  name="drivermobnum"
                  placeholder="Driver Mobile Number"
                ></InputContainer>
              </div>
            </div>
            <div className="direction">
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="dnic"
                  name="drivernic"
                  placeholder="Driver NIC"
                ></InputContainer>
              </div>
            </div>
            <div className="direction">
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="lexpdate"
                  name="licenseexpdate"
                  placeholder="License Expire Date"
                ></InputContainer>
              </div>
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="oname"
                  name="ownername"
                  placeholder="Owner Name"
                ></InputContainer>
              </div>
            </div>
            <div className="direction">
              <div className="form-group center">
                <InputContainer
                  type="number"
                  className="form-control"
                  id="omobnum"
                  name="ownermobnum"
                  placeholder="Owner Mobile Number"
                ></InputContainer>
              </div>
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="vno"
                  name="vehicleno"
                  placeholder="Vehicle Number"
                ></InputContainer>
              </div>
            </div>
            <div className="direction">
              <div className="form-group center">
                <SelectContainer className="browser-default custom-select dropdown">
                  <option selected>Vehicle Category</option>
                  <option value="1">Van</option>
                  <option value="2">Bus</option>
                </SelectContainer>
              </div>
              <div>
                {/* <Spinner
                  value={capacity}
                  size={9}
                  onChange={e => setCapacity(e.value)}
                /> */}
              </div>
            </div>

            <div className="direction">
              <div className="form-group center">
                <SelectContainer className="browser-default custom-select dropdown">
                  <option selected>Vehicle Type</option>
                  <option value="1">B</option>
                  <option value="2">D1</option>
                  <option value="3">D</option>
                </SelectContainer>
              </div>
            </div>

            <div className="center">
              <ButtonContainer>Add Drivers</ButtonContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default addDrivers;
