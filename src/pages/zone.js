import React from "react";
import TopNavbar from "../components/TopNavbar";
import SideMenuBar from "../components/SideMenuBar";
import {
  ButtonContainer,
  InputContainer,
  TopicContainer
} from "../components/Customs";

function zone() {
  return (
    <div className="background">
      <TopNavbar nextPage="/" pageName="Sign Out" />
      <SideMenuBar />

      <div className="center">
        <div className="card">
          <form action="/action_page.php">
            <div className="center">
              <TopicContainer>Add Zones</TopicContainer>
            </div>

            <div className="form-group center">
              <InputContainer
                type="text"
                className="form-control"
                id="mzone"
                name="mainzone"
                placeholder="Main Zone"
              ></InputContainer>
            </div>
            <div className="center">
              <ButtonContainer>Add Zone</ButtonContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default zone;
