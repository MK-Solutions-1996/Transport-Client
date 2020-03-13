import React from "react";
import TopNavbar from "../components/TopNavbar";
import SideMenuBar from "../components/SideMenuBar";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../components/Customs";

function drivers() {
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
        <ButtonContainer>
          <Link to="addDrivers" className="ml-auto center">
            Add Drivers
          </Link>
        </ButtonContainer>
      </div>
    </div>
  );
}

export default drivers;
