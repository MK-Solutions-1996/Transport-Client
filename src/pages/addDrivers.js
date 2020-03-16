import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import SideMenuBar from "../components/SideMenuBar";
import { Dropdown } from "primereact/dropdown";
import {
  ButtonContainer,
  InputContainer,
  TopicContainer,
  LabelContainer,
  DateContainer
} from "../components/Customs";

function AddDrivers() {
  //Vehicle Types array
  const [vehicletypes] = useState([
    { label: "B", value: "B" },
    { label: "D1", value: "D1" },
    { label: "D", value: "D" }
  ]);
  //Vehicle Categories array
  const [vehiclecategories] = useState([
    { label: "Van", value: "Van" },
    { label: "Bus", value: "Bus" }
  ]);
  //DropDown selections(Vehicle Types and Vehicle Categories) stores in these states
  const [selectedVehicleType, setVehicleType] = useState("");
  const [selectedVehicleCategory, setVehicleCategory] = useState("");
  return (
    <div className="background">
      <TopNavbar nextPage="/" pageName="Sign Out" />
      <SideMenuBar />
      <div className="center">
        <div className="card">
          <form action="/action_page.php">
            <div className="center">
              <TopicContainer>Add Drivers</TopicContainer>
            </div>
            <div className="direction">
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="dname"
                  name="drivername"
                  placeholder="Driver "
                ></InputContainer>
              </div>
              <div class="form-group center">
                <InputContainer
                  type="tel"
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
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="lno"
                  name="licensenumber"
                  placeholder="License Number"
                ></InputContainer>
              </div>
            </div>
            <div
              className="direction"
              style={{ justifyContent: "space-between" }}
            >
              <div className="form-group center">
                <LabelContainer>License Expire Date </LabelContainer>
              </div>
              <div className="form-group center">
                <DateContainer
                  type="date"
                  className="form-control"
                  id="lexpdate"
                  name="licenseexpdate"
                  placeholder="License Expire Date"
                ></DateContainer>
              </div>
            </div>
            <div className="direction">
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="oname"
                  name="ownername"
                  placeholder="Owner Name"
                ></InputContainer>
              </div>
              <div className="form-group center">
                <InputContainer
                  type="number"
                  className="form-control"
                  id="omobnum"
                  name="ownermobnum"
                  placeholder="Owner Mobile Number"
                ></InputContainer>
              </div>
            </div>
            <div className="direction">
              <div className="form-group center">
                <InputContainer
                  type="text"
                  className="form-control"
                  id="vno"
                  name="vehicleno"
                  placeholder="Vehicle Number"
                ></InputContainer>
              </div>
              <div className="form-group center">
                <Dropdown
                  className="dropdown"
                  value={selectedVehicleCategory}
                  options={vehiclecategories}
                  ariaLabel="Test"
                  onChange={e => setVehicleCategory(e.value)}
                  placeholder="Choose Vehicle Category"
                  optionLabel="label"
                />
              </div>
            </div>
            <div className="direction">
              <div className="form-group center">
                <InputContainer
                  type="number"
                  className="form-control"
                  id="vcapacity"
                  name="vehiclecapacity"
                  placeholder="Vehicle Capacity"
                ></InputContainer>
              </div>
              <div className="form-group center">
                <Dropdown
                  className="dropdown"
                  value={selectedVehicleType}
                  options={vehicletypes}
                  ariaLabel="Test"
                  onChange={e => setVehicleType(e.value)}
                  placeholder="Choose Vehicle Type"
                  optionLabel="label"
                />
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

export default AddDrivers;
