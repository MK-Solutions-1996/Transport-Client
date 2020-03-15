import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import SideMenuBar from "../components/SideMenuBar";
import {
  ButtonContainer,
  InputContainer,
  TopicContainer
} from "../components/Customs";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";

function City() {
  //sample zone array
  const [zone] = useState([
    { label: "A", value: "A" },
    { label: "B1", value: "B1" },
    { label: "C", value: "C" }
  ]);
  const [selectedSubZones, setSubZones] = useState([]);
  const [selectedMainZone, setMainZone] = useState();
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
              <Dropdown
                value={selectedMainZone}
                options={zone}
                ariaLabel="Test"
                onChange={e => setMainZone(e.value)}
                placeholder="Choose Main Zone"
                optionLabel="label"
                style={{
                  width: "20vw",
                  height: "2rem",
                  borderRadius: "0.4rem",
                  margin: "0.3rem"
                }}
              />
            </div>
            <div className="form-group center">
              <MultiSelect
                value={selectedSubZones}
                options={zone}
                onChange={e => setSubZones(e.value)}
                style={{
                  width: "20vw",
                  height: "2rem",
                  borderRadius: "0.4rem",
                  margin: "0.3rem"
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
