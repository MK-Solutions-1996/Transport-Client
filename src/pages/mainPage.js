import React from "react";
import TopNavbar from "../components/TopNavbar";
import SideMenuBar from "../components/SideMenuBar";

function mainPage() {
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
    </div>
  );
}

export default mainPage;
