import React from "react";
import TopNavbar from "../components/TopNavbar";
import SideMenuBar from "../components/SideMenuBar";

function mainPage() {
  return (
    <div className="background">
      <TopNavbar nextPage="/" pageName="Sign Out" />
      <SideMenuBar />
    </div>
  );
}

export default mainPage;
