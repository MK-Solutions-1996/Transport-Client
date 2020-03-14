import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import SideMenuBar from "../components/SideMenuBar";
import {
  ButtonContainer,
  InputContainer,
  TopicContainer,
  SelectContainer
} from "../components/Customs";
import { MultiSelect } from "primereact/multiselect";

function City() {
  //sample zone array
  const [zone] = useState([
    { label: "A", value: "A" },
    { label: "B1", value: "B1" },
    { label: "C", value: "C" }
  ]);
  const [selectedSubZones, setSubZones] = useState([]);
  return (
    <div className="background">
      <TopNavbar nextPage="/" pageName="Sign Out" />
      <SideMenuBar />

      <div className="center">
        <div className="card">
          <form action="/action_page.php">
            <div className="center">
              <TopicContainer>Add Cities</TopicContainer>
            </div>

            <div className="form-group center">
              <InputContainer
                type="text"
                className="form-control"
                id="cname"
                name="cityname"
                placeholder="City Name"
              ></InputContainer>
            </div>
            <div className="form-group center">
              <InputContainer
                type="number"
                className="form-control"
                id="km"
                name="km"
                placeholder="Kilo Meters"
              ></InputContainer>
            </div>
            <div className="form-group center">
              <SelectContainer className="browser-default custom-select">
                <option value="" disabled selected>
                  Choose Main Zone
                </option>
                {/* sample zones  */}
                <option value="1">B</option>
                <option value="2">D1</option>
                <option value="3">D</option>
              </SelectContainer>
            </div>
            <div className="form-group center">
              <MultiSelect
                value={selectedSubZones}
                options={zone}
                onChange={e => setSubZones(e.value)}
                style={{
                  width: "300px",
                  height: "35px",
                  borderRadius: "0.4rem"
                }}
                filter={true}
                filterPlaceholder="Search"
                placeholder="Choose Sub Zones"
              />
            </div>
            <div className="center">
              <ButtonContainer>Add City</ButtonContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default City;
